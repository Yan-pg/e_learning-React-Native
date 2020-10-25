import styled, {css} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 55px;
  padding: 0 16px;
  background: #fff;
  border-radius: 100px;
  margin-top: 20px;
  border-width: 3px;
  border-color: #c4c4d1;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #3d3d4c;
    `}

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #ff6680;
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
