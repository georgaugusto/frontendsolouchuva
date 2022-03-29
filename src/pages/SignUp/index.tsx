import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

//import { useToast } from '../../hooks/toast';

import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';
import { Input } from '../../components/Input';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

function SignUp() {
  //const { addToast } = useToast();

  //const handleSubmit = useCallback(
  //async (data: SignUpFormData) => {
  //try {
  //formRef.current?.setErrors({});

  //const schema = Yup.object().shape({
  //name: Yup.string().required('Nome obrigatório'),
  //email: Yup.string()
  //.required('E-mail obrigatório')
  //.email('Digite um e-mail válido'),
  //password: Yup.string().min(6, 'No mínimo 6 dígitos'),
  //});

  //await schema.validate(data, {
  //abortEarly: false,
  //});

  //await api.post('/users', data);

  //history.push('/');

  //addToast({
  //type: 'success',
  //title: 'Cadastro realizado!',
  //description: 'Você já pode fazer seu logon',
  //});
  //} catch (err) {
  //if (err instanceof Yup.ValidationError) {
  //const errors = getValidationError(err);

  //formRef.current?.setErrors(errors);

  //return;
  //}

  //addToast({
  //type: 'error',
  //title: 'Erro no cadastro',
  //description: 'Ocorreu um erro ao fazer o cadastro, tente novamente',
  //});
  //}
  //},
  //[addToast, history],
  //);

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="logo Sol ou Chuva" />

          <form>
            <h1>Faça seu cadastro</h1>

            <Input name="name" placeholder="Nome" />
            <Input name="email" placeholder="E-mail" />
            <Input name="password" type="password" placeholder="Senha" />
            <Button type="submit">Cadastrar</Button>
          </form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

export default SignUp;
