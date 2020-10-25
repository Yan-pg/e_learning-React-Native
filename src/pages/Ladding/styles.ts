import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const ContianerImage = styled.ImageBackground`
  background: #6548a3;
  width: 500px;
  height: 600px;
  justify-content: center;
`;
export const Container = styled.View`
  flex: 1;
  background: #6548a3;
`;

export const LaddingImg = styled.Image`
  margin-left: 40px;
  margin-top: 200px;
`;

export const TextLadding = styled.Text`
  font-size: 38px;
  font-family: 'Rubik-Medium';
  color: #ff6680;
  margin-top: 80px;
  width: 80%;
  margin-left: 40px;
`;

export const TextLanddingFooter = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Medium';
  color: #edebf5;
  margin-top: 60px;
  margin-left: 40px;
  width: 60%;
  line-height: 25px;
`;

export const ButtonFooter = styled(RectButton)`
  width: 321px;
  height: 56px;
  background: #ff6680;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 20px;
`;

export const ButtonFooterText = styled.Text`
  font-family: 'Roboto-Medium';
  color: #edebf5;
  font-size: 15px;
`;
