import { animated, useTransition } from 'react-spring';

import Toast from './Toast';

import { ToastMessage } from '../../contexts/toast';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

function ToastContainer({ messages }: ToastContainerProps) {
  const messagesWithTransitions = useTransition(messages, {
    key: (message: any) => message.id,
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
  });

  return (
    <Container>
      {messagesWithTransitions(({ ...style }, item) => (
        <Toast key={1} style={style} message={item} />
      ))}
    </Container>
  );
}

export default ToastContainer;
