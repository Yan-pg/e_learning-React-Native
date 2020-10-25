import React, {useCallback} from 'react';
import {View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {useAuth} from '../../hooks/Auth';

import {
  Container,
  Header,
  Input,
  Content,
  Logo,
  Main,
  ButtoSignOut,
} from './styles';

import LogoImg from '../../assets/logo.png';

const Dashboard: React.FC = () => {
  const {signOut} = useAuth();

  return (
    <Container>
      <Header>
        <Logo source={LogoImg} />
        <ButtoSignOut onPress={signOut}>
          <Icon name="power" size={25} color="#ff6680" />
        </ButtoSignOut>
      </Header>

      <Content>
        <Icon name="search" size={20} color="#C4C4D1" />
        <Input
          keyboardAppearance="dark"
          placeholderTextColor="#C4C4D1"
          placeholder="Busque um curso"
        />
      </Content>

      <Main />
    </Container>
  );
};

export default Dashboard;
