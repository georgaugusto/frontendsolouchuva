import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Link, useLocation } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';
import { Input } from '../../components/Input';

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

function SignIn() {
  //const formRef = useRef<FormHandles>(null);

  //const { addToast } = useToast();

  //const history = useHistory();
  //const location = useLocation();

  //const handleSubmit = useCallback(
  //async (data: ResetPasswordFormData) => {
  //try {
  //formRef.current?.setErrors({});

  //const schema = Yup.object().shape({
  //password: Yup.string().required('Senha obrigatória'),
  //password_confirmation: Yup.string().oneOf(
  //[Yup.ref('password'), undefined],
  //'Confirmação incorreta',
  //),
  //});

  //await schema.validate(data, {
  //abortEarly: false,
  //});

  //const { password, password_confirmation } = data;
  //const token = location.search.replace('?token=', '');

  //if (!token) {
  //throw new Error();
  //}

  //await api.post('/password/reset', {
  //password,
  //password_confirmation,
  //token,
  //});

  //history.push('/');
  //} catch (err) {
  //if (err instanceof Yup.ValidationError) {
  //const errors = getValidationError(err);

  //formRef.current?.setErrors(errors);

  //return;
  //}

  //addToast({
  //type: 'error',
  //title: 'Erro ao resetar a senha',
  //description: 'Ocorreu um erro ao resetar sua senha, tente novamente',
  //});
  //}
  //},
  //[addToast, history, location.search],
  //);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="logo Sol ou Chuva" />

          <form>
            <h1>Resetar senha</h1>

            <Input name="password" type="password" placeholder="Nova senha" />

            <Input
              name="password_confirmation"
              type="password"
              placeholder="Confirmação da senha"
            />

            <Button type="submit">Alterar senha</Button>
          </form>

          <Link to="/">
            <FiLogIn />
            Voltar ao login
          </Link>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
}

export default SignIn;
