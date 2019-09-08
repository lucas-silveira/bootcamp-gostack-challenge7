import styled from 'styled-components/native';
import { darken } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.View`
  background-color: ${colors.dark};
`;

export const Product = styled.View`
  width: 220px;
  background-color: #fff;
  padding: 20px;
  margin: 15px;
  border-radius: 4px;
`;

export const ImageProduct = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 200px;
  height: 200px;
`;

export const Title = styled.Text`
  color: #777;
  font-size: 16px;
`;

export const Price = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin: 14px 0;
`;

export const BuyButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${colors.primary};
  border-radius: 4px;
  margin-top: auto;
`;

export const AmountProduct = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${darken(0.03, colors.primary)};
  padding: 12px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const TextAmount = styled.Text`
  color: #fff;
  margin: 0 4px 0 10px;
`;

export const TextButton = styled.Text`
  flex: 1;
  color: #fff;
  font-weight: 700;
  text-align: center;
`;
