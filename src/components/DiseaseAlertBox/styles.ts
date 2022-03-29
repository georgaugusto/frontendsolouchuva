import styled, { css } from 'styled-components';

interface ContainerProps {
  type?: 'low' | 'danger' | 'warning';
}

const diseaseTypeVariations = {
  low: css`
    background: #718b7d;
  `,
  warning: css`
    background: #d7c27a;
  `,
  danger: css`
    background: #bf746d;
  `,
};

export const DiseaseData = styled.div<ContainerProps>`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background: #f7f7f7;

  border-radius: 1.75rem;

  margin: 0.75rem 2rem;

  div {
    margin: 1rem 2rem;

    strong {
      font-family: 'Mulish';
      font-style: normal;
      font-size: 1rem;

      color: var(--secundaria0);
    }

    &::before {
      position: absolute;
      width: 0.25rem;
      height: calc(100% - 2rem);

      left: 0;
      top: 0;

      border-radius: 1.75rem;

      margin: 1rem 0 1rem 1rem;

      content: '';
      ${props => diseaseTypeVariations[props.type || 'warning']};
    }

    p {
      font-family: 'Mulish';
      font-style: normal;
      font-weight: 400;
      font-size: 0.75rem;
      letter-spacing: 0.4px;

      margin: 0.75rem 0;

      color: var(--secundaria0);
    }

    span {
      display: flex;
      justify-content: flex-end;

      a {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: bold;
        font-size: 0.75rem;

        text-decoration: none;

        color: var(--secundaria0);

        &:hover {
          cursor: pointer;

          color: var(--light4);
        }
      }
    }
  }

  @media (max-width: 768px) {
    margin: 0.75rem 0.75rem;
  }
`;
