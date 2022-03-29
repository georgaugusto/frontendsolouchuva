import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

type ContainerType = {
  compact: number;
  subMenus?: number;
};

export const StyledLink = styled(Link)<ContainerType>`
  height: 3rem;
  min-height: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1.25rem;
  margin: 0.125rem 0;

  color: rgba(255, 255, 255, 0.7);

  text-decoration: none;

  font-family: Mulish;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;

  div {
    display: flex;

    i {
      width: 1.75rem;
      font-size: 1.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    span {
      padding-left: 0.875rem;
      line-height: 1.188rem;
      white-space: nowrap;
      opacity: ${props => props.compact};

      transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
    }
  }

  &:hover {
    text-decoration: none;
    background-color: var(--light2);
    opacity: 0.75;
    color: var(--primaria2);

    padding-left: 0.75rem;
    margin-left: 0.75rem;

    border-top-left-radius: 1.25rem;
    border-bottom-left-radius: 1.25rem;

    transition: 0.4s;
  }

  &.active {
    color: var(--primaria2);
    background: var(--light1);

    padding-left: 0.75rem;
    margin-left: 0.75rem;

    border-top-left-radius: 1.25rem;
    border-bottom-left-radius: 1.25rem;
  }

  @media (max-width: 1023px) {
    div {
      span {
        opacity: 1;
      }
    }

    &.active {
      color: var(--primaria-3);
      background: var(--light0);

      padding-left: 1.5rem;
      margin-left: 0;

      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;

export const ButtonClose = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const DropdownButton = styled.button<ContainerType>`
  width: 2rem;
  height: 2rem;

  align-items: flex-end;

  opacity: ${props => props.compact};

  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  svg {
    transition: transform 0.2s linear;
    transform: rotate(${props => (props.subMenus ? '0deg' : '180deg')});
  }

  @media (max-width: 1023px) {
    opacity: 1;
  }
`;
