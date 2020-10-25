import React, {useCallback, useRef, useState} from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErros';
import {useAuth} from '../../hooks/Auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Title, ContentInputs, ContainerIcon} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const {goBack} = useNavigation();

  const {signIn, user} = useAuth();

  console.log(user);

  const navigateToBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        Alert.alert('Você está logado');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, confira as credenciais.',
        );
      }
    },
    [signIn],
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
                <Title>Ei, entrar ai com seus dados.</Title>
              </View>
            </ContentInputs>

            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                icon="mail"
                keyboardType="email-address"
                name="email"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <Input
                ref={passwordInputRef}
                icon="lock"
                returnKeyType="send"
                secureTextEntry
                name="password"
                placeholder="Senha"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
            </Form>

            <Button
              onPress={() => {
                formRef.current?.submitForm();
              }}>
              Entrar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
