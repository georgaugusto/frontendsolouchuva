import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: var(--light0);

  border-radius: 28px;

  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const CultHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding-bottom: 2rem;

  strong {
    font-family: Mulish;
    font-style: normal;
    font-size: 1.25rem;

    padding-bottom: 0.25rem;
  }

  p {
    font-family: Mulish;
    font-style: normal;
    font-weight: 400;
  }
`;

export const CultBody = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SidebarCultures = styled.div`
  width: 30%;
  height: calc(100vh - 364px);

  padding-right: 2rem;

  hr {
    margin: 1rem 0;
  }

  > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    max-height: 100%;

    overflow-y: auto;

    span {
      font-family: 'Mulish';
      font-style: normal;
      font-weight: 400;

      margin-bottom: 0.5rem;

      color: var(--secundaria0);

      &:hover {
        color: var(--secundaria1);

        cursor: pointer;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 10rem;

    display: flex;
    flex-direction: column;

    padding: 0;

    > div:nth-child(3) {
      width: 100%;
    }
  }
`;

export const DiseaseListName = styled.span`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;

  &:hover {
    font-family: 'Mulish';
    font-style: bold;
    font-weight: 700 !important;
  }

  &:active {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700 !important;
  }
`;

export const DescriptionCultures = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;

  h3 {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;

    color: var(--secundaria1);

    padding-bottom: 1rem;
  }

  p {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;

    color: var(--secundaria1);

    padding-bottom: 0.5rem;

    span {
      font-family: 'Mulish';
      font-style: normal;
      font-weight: 700;
    }
  }

  div:nth-child(6) {
    display: flex;
    justify-content: center;

    padding: 1rem 0;

    img {
      padding-left: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    padding-top: 2rem;

    div:nth-child(6) {
      flex-wrap: wrap;

      img {
        padding-left: 0.5rem;
      }
    }
  }
`;

export const NoDescription = styled.span`
  font-family: Mulish;
  font-style: normal;
  font-weight: 400;
`;
