import React, {useRef, useCallback} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';

// import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Title, ContentInputs, ContainerIcon} from './styles';

import getValidationErrors from '../../utils/getValidationErros';
import api from '../../services/api';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const {goBack, navigate} = useNavigation();

  const navigateToBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        Alert.alert(
          'Cadastro realizado com sucesso!',
          'Você já pode fazer login na aplicação',
        );

        navigate('SignIn');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao fazer seu cadastro. Tente novamente',
        );
      }
    },
    [navigate],
  );
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={Platform.OS === 'ios' ? {flex: 1} : {flex: 0}}
          keyboardShouldPersistTaps="handled">
          <Container>
            <ContainerIcon onPress={navigateToBack}>
              <Icon name="arrow-left" size={35} color="#ff6680" />
            </ContainerIcon>

            <ContentInputs>
              <View>
                <Title>Que ótimo, gente nova ! :)</Title>
              </View>
            </ContentInputs>

            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
              />
              <Input
                ref={emailInputRef}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                secureTextEntry
                name="password"
                icon="lock"
                placeholder="Senha"
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
            </Form>

            <Button
              onPress={() => {
                formRef.current?.submitForm();
              }}>
              Criar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
