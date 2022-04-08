import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  max-width: 100%;
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    /* padding-bottom: 0.125rem; */
    padding-bottom: 0.25rem;

    font-weight: bold;
    font-size: 1rem;
    line-height: 1.5rem;

    color: var(--secundaria0);
  }

  > div {
    max-width: 100%;
    input {
      width: 100%;
      height: 2.313rem;

      padding: 0.5rem 0 0.5rem 0.75rem;
      margin-bottom: 0.125rem;

      background: var(--light-1);

      font-weight: normal;
      font-size: 16px;
      line-height: 130%;

      color: var(--secundaria0);
      border: 1px solid var(--light1);
      box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.1);
      border-radius: 4px;

      transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);

      &:focus {
        outline: none;
        border: 0.5px solid var(--light1);
      }

      &:disabled {
        background: #eaeaea;
        border: 0.5px solid #d5d7df;

        cursor: default;
      }

      ${props =>
        props.isErrored &&
        css`
          border-color: var(--primaria0);
        `}

      &::placeholder {
        color: #979191;
      }
    }

    svg {
      position: absolute;

      cursor: pointer;

      margin-top: 0.4rem;
      margin-left: -2rem;

      color: #979191;
    }

    > span:nth-child(2) {
      position: absolute;

      cursor: pointer;

      margin-top: 0.5rem;
      margin-left: -2rem;
    }
  }
`;

export const ErrorMessage = styled.div<ContainerProps>`
  padding: 0 0 1.5rem 0;
  opacity: 0;

  span {
    font-family: Roboto;
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 1.5rem;

    color: var(--primaria0);

    cursor: default;
  }

  ${props =>
    props.isErrored &&
    css`
      opacity: 1;

      transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
    `}
`;

//export const Error = styled(Tooltip)`
//height: 20px;
//margin-left: 16px;

//svg {
//margin: 0;
//}

//span {
//background: #c53030;
//color: #242424;

//&::before {
//border-color: #c53030 transparent;
//}
//}
//`;
