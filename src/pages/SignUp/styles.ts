import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const ContainerIcon = styled.TouchableOpacity`
  margin-top: 20%;
  position: absolute;
  left: 20px;
  top: 0;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #edebf5;
  font-family: 'Roboto-Medium';
  margin: 14px 0px 94px;
`;

export const ContentInputs = styled.View`
  margin-top: 50%;
`;
