import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 43.75rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  background-color: var(--light1);

  border-radius: 0 2rem 2rem 0;

  z-index: 1;

  @media (max-width: 768px) {
    border-radius: 0;
  }
`;

const appeatFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-3.125px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appeatFromLeft} 1s;

  img {
    width: 20rem;
  }

  form {
    margin: 5rem 0;
    width: 21.25rem;
    text-align: center;

    h1 {
      font-family: Mulish;
      margin-bottom: 1.5rem;
      color: var(--secundaria0);
    }
  }

  > a {
    font-family: Mulish;
    color: var(--primaria1);
    display: block;
    margin-top: 1.5rem;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.4, `#5e9778`)};
    }

    svg {
      margin-right: 1rem;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;

  margin-left: -2rem;
  z-index: 0;
`;
