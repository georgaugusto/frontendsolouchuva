import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { v4 as uuid } from 'uuid';

import ToastContainer from '../../components/ToastContainer';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

interface ToastContextProviderProps {
  children: ReactNode;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

function ToastContextProvider({ children }: ToastContextProviderProps) {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const toastId = uuid();

      const toast = {
        id: toastId,
        type,
        title,
        description,
        remove: () => {
          setMessages(oldMessages =>
            oldMessages.filter(({ id }) => id !== toastId),
          );
        },
      };

      setMessages(oldMessages => [...oldMessages, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  const contextValue = useMemo(
    () => ({
      addToast,
      removeToast,
    }),
    [addToast, removeToast],
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
}

export { ToastContextProvider };
export default ToastContext;
