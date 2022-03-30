import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import AuthContext from '../../contexts/auth';
import Button from '../../components/Button';
import { Input } from '../../components/Input';

import logoImg2x from '../../assets/logoSC@2x.svg';

import { Container, Content, AnimationContainer, Background } from './styles';

interface SingInFormData {
  email: string;
  password: string;
}

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
  } = useForm<SingInFormData>({
    resolver: yupResolver(signInFormSchema),
  });

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('@SolouChuva:token');
    if (token) navigate('/dashboard');
  }, [navigate]);

  const signInUser = async (values: SingInFormData) => {
    const data = {
      email: values.email,
      password: values.password,
    };

    await signIn(data);
  };

  const handleforgotSignIn: SubmitHandler<SingInFormData> = async data => {
    await signInUser(data);
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg2x} alt="logo Sol ou Chuva" />

          <form onSubmit={handleSubmit(handleforgotSignIn)}>
            <h1>Faça seu logon</h1>

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
