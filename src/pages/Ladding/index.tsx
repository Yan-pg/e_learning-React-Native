import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  ContianerImage,
  Container,
  LaddingImg,
  TextLadding,
  TextLanddingFooter,
  ButtonFooter,
  ButtonFooterText,
} from './styles';

import LaddingImgVector from '../../assets/Vector.png';
import Elearning from '../../assets/learning.png';

const Ladding: React.FC = () => {
  const {navigate} = useNavigation();

  const navigateToAccont = useCallback(() => {
    navigate('Account');
  }, [navigate]);

  return (
    <Container>
      <ContianerImage source={Elearning}>
        <LaddingImg source={LaddingImgVector} />
        <TextLadding>Aprenda da melhor forma</TextLadding>
      </ContianerImage>
      <TextLanddingFooter>
        Entre na plataforma e acesse cursos de diversas áreas de conhecimento.
      </TextLanddingFooter>
      <ButtonFooter onPress={navigateToAccont}>
        <ButtonFooterText>Começar os estudos</ButtonFooterText>
      </ButtonFooter>
    </Container>
  );
};

export default Ladding;
