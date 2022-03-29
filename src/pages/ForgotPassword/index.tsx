import React, { useRef, useCallback, useState } from 'react';
import { FiLogIn, FiMail } from 'react-icons/fi';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';
import { Input } from '../../components/Input';

interface ForgotPasswordFormData {
  email: string;
}

function ForgotPassword() {
  //const [loading, setLoading] = useState(false);
  //const formRef = useRef<FormHandles>(null);

  //const { addToast } = useToast();

  //const handleSubmit = useCallback(
  //async (data: ForgotPasswordFormData) => {
  //try {
  //setLoading(true);
  //formRef.current?.setErrors({});

  //const schema = Yup.object().shape({
  //email: Yup.string()
  //.required('E-mail obrigatório')
  //.email('Digite um e-mail válido'),
  //});

  //await schema.validate(data, {
  //abortEarly: false,
  //});

  //await api.post('/password/forgot', {
  //email: data.email,
  //});

  //addToast({
  //type: 'success',
  //title: 'E-mail de recuperação enviado.',
  //description:
  //'Enviamos um e-mail para confirmar a recuperarção de senha, cheque sua caixa de entrada.',
  //});
  //} catch (err) {
  //if (err instanceof Yup.ValidationError) {
  //const errors = getValidationError(err);

  //formRef.current?.setErrors(errors);

  //return;
  //}

  //addToast({
  //type: 'error',
  //title: 'Erro na recuperação de senha',
  //description:
  //'Ocorreu um erro ao tentar realizar a recuperação de senha, tente novamente',
  //});
  //} finally {
  //setLoading(false);
  //}
  //},
  //[addToast],
  //);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="logo Sol ou Chuva" />

          <form>
            <h1>Recuperar senha</h1>

            <Input name="email" placeholder="E-mail" />

            <Button type="submit">Recuperar</Button>
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

export default ForgotPassword;
