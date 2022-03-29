import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';

import AuthContext from '../../contexts/auth';
import ToastContext from '../../contexts/toast';
import Button from '../../components/Button';
import { Input } from '../../components/Input';
import logoImg from '../../assets/logo.svg';

import { Container, Content, AnimationContainer, Background } from './styles';

const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Deve ser um e-mail válido')
    .max(255)
    .required('Email obrigatório'),
  password: yup.string().max(255).required('Senha obrigatório'),
});

function SingIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { addToast } = useContext(ToastContext);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('@SolouChuva:token');
    if (token) navigate('/dashboard');
  }, [navigate]);

  const handleSignIn = async (values: any) => {
    const data = {
      email: values.email,
      password: values.password,
    };

    addToast({
      type: 'error',
      title: 'Erro na autenticação',
      description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
    });

    await signIn(data);
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="logo Sol ou Chuva" />

          <form onSubmit={handleSubmit(handleSignIn)}>
            <Input
              type="text"
              placeholder="E-mail"
              Icon={FiMail}
              error={errors.email}
              {...register('email')}
            />
            <Input
              type="password"
              placeholder="Password"
              Icon={FiLock}
              error={errors.password}
              {...register('password')}
            />

            <Button type="submit">Entrar</Button>
            <Link to="/forgot-password">Esqueci minha senha</Link>
          </form>

          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
}

export default SingIn;
