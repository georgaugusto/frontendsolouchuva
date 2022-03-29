import styled from 'styled-components';

export const SensorData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 12rem;
  height: 6rem;

  color: #ffffff;
  border-radius: 1.5rem;

  &:nth-child(2) {
    margin-left: 0.5rem;
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: nomal;
    font-size: 1.5rem;

    svg {
      color: #ffffff;
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  > span {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    text-align: center;
  }
`;
