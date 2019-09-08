import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  background-color: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
`;

export const Products = styled.View``;

export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  padding: 10px;
  margin-left: 10px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: 700;
  margin-top: 5px;
`;

export const ProductDelete = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductControls = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #eee;
  padding: 8px;
  border-radius: 4px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  min-width: 52px;
  background-color: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const ProductSubTotal = styled.Text`
  flex: 1;
  font-size: 16px;
  font-weight: 700;
  text-align: right;
`;

export const TotalContainer = styled.View`
  margin-top: 30px;
`;

export const TotalText = styled.Text`
  color: #999;
  font-weight: 700;
  text-align: center;
`;

export const TotalAmount = styled.Text`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 30px;
`;

export const Order = styled.View`
  background-color: ${colors.primary};
  padding: 12px;
  border-radius: 4px;
`;

export const OrderText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
`;

export const EmptyContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const EmptyText = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin-top: 18px;
`;
