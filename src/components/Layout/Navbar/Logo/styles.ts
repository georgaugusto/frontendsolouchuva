import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ContainerProps {
  compact: number;
}

export const StyleLink = styled(Link)<ContainerProps>`
  min-height: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-decoration: none;

  padding: 2rem 0 0 0;

  filter: brightness(0) invert(1);

  img {
    width: ${props => (props.compact ? '2.5rem' : '5rem')};

    transition: width 0.3s cubic-bezier(0.4, 0, 1, 1);
  }

  &:hover {
    text-decoration: none;
  }

  span {
    font-family: Mulish;
    /* font-size: 1.625rem; */
    font-size: ${props => (props.compact ? 0 : '1.625rem')};
    font-weight: 700;

    padding: 0.5rem 0 0 0;
    opacity: ${props => (props.compact ? 0 : 1)};
    /* opacity: ${props => (props.compact ? 0 : 1)}; */

    transition: font-size 0.3s cubic-bezier(0.4, 0, 1, 1);
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;
