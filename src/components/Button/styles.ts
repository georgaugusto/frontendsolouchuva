import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  height: 2.938rem;

  border-radius: 0.5rem;
  border: 0;

  font-family: Mulish;
  font-weight: 500;

  color: var(--light0);
  background: var(--primaria2);

  margin-top: 1rem;
  padding: 0 1rem;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.4, '#718b7d')};
  }
`;
