import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #ff6680;
  border-radius: 100px;
  margin-top: 10px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  color: #edebf5;
  font-size: 18px;
`;
