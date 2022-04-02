import styled from 'styled-components';

export const DetailedInformation = styled.div`
  strong {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;

    color: var(--secundaria1);

    padding-top: 0.5rem;
  }

  span {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;

    padding-left: 1rem;
    padding-bottom: 0.25rem;

    color: var(--secundaria1);

    span {
      font-size: 0.85rem;
      padding-left: 0;
    }
  }

  a {
    text-decoration: none;
    color: var(--secundaria1);

    &:hover {
      font-weight: 700;
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;
