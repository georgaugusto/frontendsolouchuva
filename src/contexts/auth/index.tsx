/*eslint-disable no-console */

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import ToastContext from '../toast';

interface UserProps {
  email: string;
}

interface SignInCredentialsProps {
  email: string;
  password: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredentialsProps): Promise<void>;
  user: UserProps | undefined;
  isAuthenticated: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

const authChannel = new BroadcastChannel('auth');

function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>();
  const navigate = useNavigate();
  const { addToast } = useContext(ToastContext);
  const isAuthenticated = !!user;

  useEffect(() => {
    authChannel.onmessage = message => {
      switch (message.data) {
        case 'signOut':
          window.localStorage.clear();
          setUser(undefined);

          authChannel.postMessage('signOut');

          navigate('/', { replace: true });
          break;
        default:
          break;
      }
    };
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem('@SolouChuva:token');

    if (token) {
      api
        .get('/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          const { email } = response.data;
          setUser({ email });
        })
        .catch(() => {
          window.localStorage.clear();
          setUser(undefined);

          navigate('/', { replace: true });
        });
    }
  }, [navigate]);

  const signIn = useCallback(
    async ({ email, password }: SignInCredentialsProps) => {
      try {
        const response = await api.post('sessions', {
          email,
          password,
        });

        const { refresh } = response.data;

        localStorage.setItem('@SolouChuva:token', refresh);

        setUser({
          email,
        });

        api.defaults.headers.common.Authorization = `Bearer ${refresh}`;

        navigate('/dashboard', { replace: true });
      } catch (err) {
        console.log(err);
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [navigate, addToast],
  );

  const contextValue = useMemo(
    () => ({
      user,
      isAuthenticated,
      signIn,
    }),
    [user, isAuthenticated, signIn],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export { AuthContextProvider };
export default AuthContext;
