import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  background-color: var(--light0);
  border-radius: 28px;

  > div:nth-child(1) {
    width: 50%;

    padding: 2rem;
  }

  > div:nth-child(2) {
    width: 50%;
    height: 100%;

    border-radius: 0 28px 28px 0;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;

    height: auto;

    > div:nth-child(1) {
      width: 100%;

      padding: 2rem;
    }

    > div:nth-child(2) {
      width: 100%;
      height: 20rem;

      border-radius: 0 0 28px 28px;
    }
  }
`;

export const DetailedInformationHeader = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 1rem;

  h2 {
    font-family: 'Mulish';

    padding-bottom: 1rem;
  }

  > div {
    display: flex;
    align-items: center;

    h3 {
      padding-right: 0.5rem;
    }
  }
`;
