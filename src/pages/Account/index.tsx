import React, {useCallback, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  ImageLogo,
  TextCenter,
  ButtonCenter,
  ButtonCenterText,
  FooterText,
  ButtonFooter,
} from './styles';

// import LaddingImgVector from '../../assets/Vector.png';
import logoImg from '../../assets/logo.png';

const Account: React.FC = () => {
  const {navigate} = useNavigation();

  const navigateToSignIn = useCallback(() => {
    navigate('SignIn');
  }, [navigate]);

  const navigateToSignUP = useCallback(() => {
    navigate('SignUp');
  }, [navigate]);

  return (
    <Container>
      <ImageLogo source={logoImg} />
      <TextCenter>Como assim você não tem uma conta ?</TextCenter>

      <ButtonCenter onPress={navigateToSignUP}>
        <ButtonCenterText>Criar agora</ButtonCenterText>
      </ButtonCenter>
      <ButtonFooter onPress={navigateToSignIn}>
        <Icon name="log-in" size={40} color="#ff6680" />
        <FooterText>Login</FooterText>
      </ButtonFooter>
    </Container>
  );
};

export default Account;
