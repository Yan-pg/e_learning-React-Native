import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 20%;
`;

export const Logo = styled.Image``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  align-items: center;
  margin: 0 auto;
`;

export const Content = styled.View`
  width: 90%;
  height: 55px;
  padding: 0 16px;
  background: #fff;
  border-radius: 100px;
  margin: 25px auto;

  flex-direction: row;
  align-items: center;
`;

export const ButtoSignOut = styled.TouchableOpacity``;

export const Input = styled.TextInput`
  flex: 1;
  color: #ff6680;
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;

export const Main = styled.View`
  flex: 1;
  background: #f0edf5;
  margin-top: 20px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;
