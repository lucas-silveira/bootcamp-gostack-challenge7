import styled from 'styled-components/native';

import colors from '../../styles/colors';
import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex: 0 0 auto;
  flex-direction: row;
  background-color: ${colors.dark};
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const Cart = styled.TouchableOpacity`
  flex: 1;
  width: 24px;
  height: 24px;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  color: #fff;
  background-color: ${colors.primary};
  font-size: 12px;
  text-align: center;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
