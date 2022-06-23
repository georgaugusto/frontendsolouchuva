import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: calc(100vw - 2px - 22.5px - 22.5px);

  padding-top: 2rem;

  background: #f5f5f5;
  border: 1px solid rgba(237, 237, 245, 0.602601);
  border-radius: 30px;

  margin-top: 2rem;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-slide {
    min-width: 12rem;
    width: 25%;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const WeatherStationHeader = styled.div`
  padding: 0 2rem 1rem 2rem;
`;

export const LastWeatherReading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin: 10px 15px 10px 0;

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
