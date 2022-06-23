import styled from 'styled-components';

import weatherInformationImg from '../../assets/weatherInformationImg.svg';

export const Container = styled.div`
  max-width: 100%;
  max-height: 100%;

  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const WeatherInformation = styled.div`
  display: flex;
  flex-direction: row;

  background: #ffecc8;
  border-radius: 28px;

  background-image: url(${weatherInformationImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom right;

  > div {
    width: 100%;
    display: flex;

    flex-direction: column;
    justify-content: space-around;

    margin: 27px;

    > strong {
      margin-bottom: 12px;
      font-style: normal;

      font-size: 30px;
      line-height: 32px;
      color: #c45a01;
    }

    > span {
      font-family: Mulish;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;

      letter-spacing: 0.598334px;
      color: #bd5600;
    }

    > div {
      display: flex;
      flex-direction: row;

      align-items: center;

      img {
        width: 50px;
        height: 50px;

        filter: invert(60%);
      }

      p {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;

        letter-spacing: 0.598334px;
        text-transform: capitalize;

        color: #242424;
      }
    }
  }
`;

export const WeatherAlerts = styled.div`
  padding: 2rem 0;
`;

export const WeatherAlertsHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  flex-wrap: wrap;

  padding-bottom: 1rem;

  > strong:nth-child(1) {
    font-family: Mulish;
    font-style: normal;
    font-size: 1.5rem;

    letter-spacing: 1.02571px;

    color: #242424;
  }

  > div {
    width: 12rem;
  }

  @media (max-width: 768px) {
    > div {
      width: 100%;

      margin-top: 0.5rem;
    }

    > strong:nth-child(1) {
      margin-bottom: 0.5rem;
    }
  }
`;

export const WeatherAlertsBody = styled.div`
  background: #ffffff;
  border: 1px solid #e6e5f2;
  border-radius: 28px;

  padding: 1rem 0;

  > strong {
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;

    letter-spacing: 0.16px;

    color: #5a5e69;

    margin: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;

    > strong {
      margin: 0.75rem;
    }
  }
`;

export const SectionOne = styled.section`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const SectionTwo = styled.section`
  display: flex;
  flex-direction: column;

  background: #f5f5f5;
  border: 1px solid rgba(237, 237, 245, 0.602601);
  border-radius: 30px 0px 0px 30px;

  margin-right: -3.75rem;

  @media (max-width: 1023px) {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const WeatherStationHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 25px 30px 0px 25px;

  strong {
    font-family: Mulish;
    font-style: normal;
    font-size: 18px;
    line-height: 30px;
    color: #242424;
  }

  p {
    font-family: Mulish;
    font-style: normal;
    font-size: 16px;
    line-height: 30px;
    color: #242424;
  }
`;

export const WeatherStationContent = styled.div`
  margin: 1.5rem 1.5rem 0 1.5rem;
`;

export const GridContent = styled.div`
  display: flex;
  justify-content: space-around;

  margin-bottom: 0.5rem;
`;

export const LastWeatherReading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-bottom: 5px;
  margin-right: 30px;

  strong {
    font-family: Mulish;
    font-style: bold;
    font-size: 13px;
    color: #242424;
    text-align: center;
  }

  p {
    font-family: Mulish;
    font-style: bold;
    font-size: 11px;
    color: #9897ad;
    text-align: center;
  }
`;
