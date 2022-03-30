import { useCallback, useContext } from 'react';
import { FiLogIn, FiLock } from 'react-icons/fi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

import ToastContext from '../../contexts/toast';

import Button from '../../components/Button';
import { Input } from '../../components/Input';

import logoImg2x from '../../assets/logoSC@2x.svg';

import { Container, Content, AnimationContainer, Background } from './styles';

interface ResetPasswordFormData {
  password: string;
  passwordConfirmation: string;
}

const resetPasswordFormSchema = yup.object().shape({
  password: yup.string().min(6, 'No mínimo 6 dígitos'),
  passwordConfirmation: yup.string().min(6, 'No mínimo 6 dígitos'),
});

function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: yupResolver(resetPasswordFormSchema),
  });

  const location = useLocation();
  const { addToast } = useContext(ToastContext);
  const navigate = useNavigate();

  const resetPasswordUser = useCallback(
    async (data: ResetPasswordFormData) => {
      const { password, passwordConfirmation } = data;
      const token = location.search.replace('?token=', '');

      if (!token) {
        throw new Error();
      }

      await axios
        .post(`${process.env.REACT_APP_API_URL}/password/reset`, {
          password,
          password_confirmation: passwordConfirmation,
          token,
        })
        .then(() => {
          navigate('/');
          addToast({
            type: 'success',
            title: 'Senha resetada com sucesso!',
            description: 'Você já pode fazer seu logon',
          });
        })
        .catch(() => {
          addToast({
            type: 'error',
            title: 'Erro ao resetar a senha',
            description:
              'Ocorreu um erro ao resetar sua senha, tente novamente',
          });
        });
    },
    [location.search, addToast, navigate],
  );

  const handleResetPassword: SubmitHandler<
    ResetPasswordFormData
  > = async data => {
    await resetPasswordUser(data);
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg2x} alt="logo Sol ou Chuva" />

          <form onSubmit={handleSubmit(handleResetPassword)}>
            <h1>Resetar senha</h1>

            <Input
              type="password"
              placeholder="Nova senha"
              Icon={FiLock}
              error={errors.password}
              {...register('password')}
            />

            <Input
              type="password"
              placeholder="Confirmação da senha"
              Icon={FiLock}
              error={errors.passwordConfirmation}
              {...register('passwordConfirmation')}
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

export default ResetPassword;
