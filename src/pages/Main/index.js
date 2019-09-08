import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import {
  Container,
  Product,
  ImageProduct,
  Title,
  Price,
  BuyButton,
  AmountProduct,
  TextAmount,
  TextButton,
} from './styles';

export default function Main() {
  const [products, setProduct] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    loadProducts();

    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      return setProduct(data);
    }
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <FlatList
        horizontal
        data={products}
        extraData={amount}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <Product key={item.id}>
            <ImageProduct source={{ uri: item.image }} />
            <Title>{item.title}</Title>
            <Price>{item.priceFormatted}</Price>
            <BuyButton onPress={() => handleAddProduct(item.id)}>
              <AmountProduct>
                <Icon name="add-shopping-cart" color="#fff" size={18} />
                <TextAmount>{amount[item.id] || 0}</TextAmount>
              </AmountProduct>
              <TextButton>Adicionar ao carrinho</TextButton>
            </BuyButton>
          </Product>
        )}
      />
    </Container>
  );
}
