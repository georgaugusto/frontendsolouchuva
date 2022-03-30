import { useCallback, useContext } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

import ToastContext from '../../contexts/toast';

import { Input } from '../../components/Input';
import Button from '../../components/Button';

import logoImg2x from '../../assets/logoSC@2x.svg';

import { Container, Content, AnimationContainer, Background } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const signUpFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup
    .string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  password: yup.string().min(6, 'No mínimo 6 dígitos'),
});

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpFormSchema),
  });

  const { addToast } = useContext(ToastContext);
  const navigate = useNavigate();

  const createUser = useCallback(
    async (data: SignUpFormData) => {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/users`, data)
        .then(() => {
          navigate('/');

          addToast({
            type: 'success',
            title: 'Cadastro realizado!',
            description: 'Você já pode fazer seu logon',
          });
        })
        .catch(() => {
          addToast({
            type: 'error',
            title: 'Erro no cadastro',
            description: 'Ocorreu um erro ao fazer o cadastro, tente novamente',
          });
        });
    },
    [addToast, navigate],
  );

  const handleCreateUser: SubmitHandler<SignUpFormData> = async data => {
    await createUser(data);
  };

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg2x} alt="logo Sol ou Chuva" />

          <form onSubmit={handleSubmit(handleCreateUser)}>
            <h1>Faça seu cadastro</h1>

            <Input
              type="text"
              placeholder="Nome"
              Icon={FiUser}
              error={errors.name}
              {...register('name')}
            />
            <Input
              type="text"
              placeholder="E-mail"
              Icon={FiMail}
              error={errors.email}
              {...register('email')}
            />
            <Input
              type="password"
              placeholder="Senha"
              Icon={FiLock}
              error={errors.password}
              {...register('password')}
            />
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
