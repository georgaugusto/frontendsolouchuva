import { useCallback, useState, useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail } from 'react-icons/fi';
import axios from 'axios';

import ToastContext from '../../contexts/toast';

import { Input } from '../../components/Input';
import Button from '../../components/Button';

import logoImg2x from '../../assets/logoSC@2x.svg';

import { Container, Content, AnimationContainer, Background } from './styles';

interface ForgotPasswordFormData {
  email: string;
}

const forgotPasswordFormSchema = yup.object().shape({
  email: yup
    .string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
});

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: yupResolver(forgotPasswordFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const { addToast } = useContext(ToastContext);

  const forgotPasswordUser = useCallback(
    async (data: ForgotPasswordFormData) => {
      setLoading(true);
      await axios
        .post(`${process.env.REACT_APP_API_URL}/password/forgot`, data)
        .then(() => {
          addToast({
            type: 'success',
            title: 'E-mail de recuperação enviado.',
            description:
              'Enviamos um e-mail para confirmar a recuperarção de senha, cheque sua caixa de entrada.',
          });
        })
        .catch(() => {
          addToast({
            type: 'error',
            title: 'Erro na recuperação de senha',
            description:
              'Ocorreu um erro ao tentar realizar a recuperação de senha, tente novamente',
          });
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [addToast],
  );

  const handleforgotPasswordUser: SubmitHandler<
    ForgotPasswordFormData
  > = async data => {
    await forgotPasswordUser(data);
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg2x} alt="logo Sol ou Chuva" />

          <form onSubmit={handleSubmit(handleforgotPasswordUser)}>
            <h1>Recuperar senha</h1>

            <Input
              type="text"
              placeholder="E-mail"
              Icon={FiMail}
              error={errors.email}
              {...register('email')}
            />

            <Button loading={loading} type="submit">
              Recuperar
            </Button>
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
