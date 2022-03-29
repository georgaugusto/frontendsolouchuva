import styled from 'styled-components';

type ContainerType = {
  compact?: boolean;
};

export const Button = styled.button<ContainerType>`
  width: 0.75rem;
  height: 1.5rem;

  background: var(--primaria2);

  text-align: ${props => (props.compact ? 'center' : 'right')};

  min-height: 0.75rem;

  border: none;
  border-radius: 0px 0.125rem 0.125rem 0px;

  margin-top: 4.5rem;

  svg {
    display: flex;
    border-radius: 0.063rem;
    color: var(--light0);
    font-size: 1rem;

    margin: ${props => (props.compact ? '0 -0.125rem' : '0 -0.188rem')};

    transition: transform 0.2s linear;
    transform: rotate(${props => (props.compact ? '270deg' : '90deg')});
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;
