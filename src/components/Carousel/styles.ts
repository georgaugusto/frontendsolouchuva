import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100%;

  margin-top: 2rem;

  background: #f5f5f5;
  border: 1px solid rgba(237, 237, 245, 0.602601);
  border-radius: 30px;

  .carousel {
    height: 110px;

    margin: 1rem 0;
  }

  .carousel__slider {
    padding-left: 30%;
    padding-right: 30%;
  }

  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 620px) {
    .carousel__slider {
      padding-left: 25%;
      padding-right: 25%;
    }
  }

  @media (max-width: 510px) {
    .carousel__slider {
      padding-left: 15%;
      padding-right: 15%;
    }
  }

  @media (max-width: 380px) {
    .carousel__slider {
      padding-left: 10%;
      padding-right: 10%;
    }
  }
`;

export const WeatherStationHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 25px 30px 0px 25px;

  strong {
    font-style: normal;
    font-size: 18px;
    line-height: 30px;
    color: #242424;
  }

  p {
    font-style: normal;
    font-size: 16px;
    line-height: 30px;
    color: #242424;
  }
`;

export const LastWeatherReading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-bottom: 5px;
  margin-right: 30px;

  strong {
    font-style: bold;
    font-size: 13px;
    color: #242424;
    text-align: center;
  }

  p {
    font-style: bold;
    font-size: 11px;
    color: #9897ad;
    text-align: center;
  }
`;
