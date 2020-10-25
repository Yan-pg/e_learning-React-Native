import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ImageLogo = styled.Image`
  margin-top: 20%;
  align-self: center;
`;

export const TextCenter = styled.Text`
  font-size: 30px;
  font-family: 'Rubik-Medium';
  color: #edebf5;
  margin-top: 55%;
  margin-left: 40px;
  width: 80%;
`;

export const ButtonCenter = styled(RectButton)`
  width: 350px;
  height: 56px;
  background: #ff6680;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 50px;
`;

export const ButtonCenterText = styled.Text`
  font-family: 'Roboto-Medium';
  color: #edebf5;
  font-size: 18px;
`;

export const ButtonFooter = styled.TouchableOpacity`
  position: absolute;
  left: 60px;
  right: 60px;
  bottom: 0;
  border-color: #232129;
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: row;
`;

export const FooterText = styled.Text`
  color: #edebf5;
  font-size: 15px;
  margin-top: 10px;
  text-align: center;
  justify-content: center;
  margin-left: 10px;
`;
