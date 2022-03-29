import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import { useMemo, useState } from 'react';
import {
  FiWind,
  FiSun,
  FiThermometer,
  FiDroplet,
  FiFeather,
  FiCloudDrizzle,
  FiArrowDownCircle,
  FiTrendingUp,
} from 'react-icons/fi';
import AsyncSingleSelect from '../AsyncSingleSelect';

import WeatherBox from '../WeatherBox';

import {
  CarouselContainer,
  WeatherStationHeader,
  LastWeatherReading,
} from './styles';

function WeatherCarousel({ optionsData, onChange, value }: any) {
  const [isOnline, setisOnline] = useState<boolean>(false);

  const formatTime = useMemo(() => {
    return Intl.DateTimeFormat('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(new Date());
  }, []);

  return (
    <CarouselContainer>
      <WeatherStationHeader>
        <AsyncSingleSelect
          optionsData={optionsData}
          onChange={onChange}
          value={value}
        />
      </WeatherStationHeader>

      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={66}
        totalSlides={11}
        visibleSlides={1}
        currentSlide={1}
      >
        <Slider>
          <Slide index={0}>
            <WeatherBox
              data={0}
              unity="°C"
              name="Temperatura"
              icon={FiThermometer}
              color="#bf746d"
            />
          </Slide>
          <Slide index={1}>
            <WeatherBox
              data={0}
              unity="%"
              name="Umidade do Ar"
              icon={FiDroplet}
              color="#d19f89"
            />
          </Slide>
          <Slide index={2}>
            <WeatherBox
              data={0}
              unity="°C"
              name="Sensação Térmica"
              icon={FiThermometer}
              color="#7aa3ae"
            />
          </Slide>
          <Slide index={3}>
            <WeatherBox
              data={0}
              unity="%"
              name="Umidade do Solo"
              icon={FiDroplet}
              color="#8a8786"
            />
          </Slide>
          <Slide index={4}>
            <WeatherBox
              data={0}
              unity="mm"
              name="Índice Pluviométrico"
              icon={FiCloudDrizzle}
              color="#859aa2"
            />
          </Slide>
          <Slide index={5}>
            <WeatherBox
              data={0}
              unity="%"
              name="Molhamento Foliar"
              icon={FiFeather}
              color="#718b7d"
            />
          </Slide>
          <Slide index={6}>
            <WeatherBox
              data={0}
              unity="Lux"
              name="Luminosidade"
              icon={FiSun}
              color="#d7c27a"
            />
          </Slide>
          <Slide index={7}>
            <WeatherBox
              data={0}
              unity="Uv"
              name="Índice Ultravioleta"
              icon={FiSun}
              color="#a19583"
            />
          </Slide>
          <Slide index={8}>
            <WeatherBox
              data={0}
              unity="hpa"
              name="Pressão Atmosférica"
              icon={FiArrowDownCircle}
              color="#7fb2bb"
            />
          </Slide>
          <Slide index={9}>
            <WeatherBox
              data={0}
              unity="Km/h"
              name="Velocidade do Vento"
              icon={FiWind}
              color="#9f9394"
            />
          </Slide>
          <Slide index={10}>
            <WeatherBox
              data={0}
              unity="m"
              name="Altitude"
              icon={FiTrendingUp}
              color="#947c95"
            />
          </Slide>
        </Slider>
      </CarouselProvider>
      <LastWeatherReading>
        <div>
          <strong>Última Leitura</strong>
          <p>{isOnline ? formatTime : '00:00:00'}</p>
        </div>
      </LastWeatherReading>
    </CarouselContainer>
  );
}

export default WeatherCarousel;
