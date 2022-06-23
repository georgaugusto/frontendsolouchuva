/*eslint-disable import/no-unresolved */

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
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

function WeatherCarousel({
  optionsData,
  weatherStationData,
  onChange,
  value,
}: any) {
  const [isOnline, setisOnline] = useState<boolean>(false);

  const formatTime = useMemo(() => {
    return Intl.DateTimeFormat('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(weatherStationData.lastRead);
  }, [weatherStationData.lastRead]);

  return (
    <CarouselContainer>
      <WeatherStationHeader>
        <AsyncSingleSelect
          optionsData={optionsData}
          onChange={onChange}
          value={value}
        />
      </WeatherStationHeader>

      <div>
        <Swiper
          slidesPerView="auto"
          centeredSlides
          loop
          loopFillGroupWithBlank
          grabCursor
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <WeatherBox
              data={weatherStationData.temperature}
              unity="°C"
              name="Temperatura"
              icon={FiThermometer}
              color="#bf746d"
            />
          </SwiperSlide>
          <SwiperSlide>
            <WeatherBox
              data={weatherStationData.airHumidity}
              unity="%"
              name="Umidade do Ar"
              icon={FiDroplet}
              color="#d19f89"
            />
          </SwiperSlide>
          <SwiperSlide>
            <WeatherBox
              data={weatherStationData.thermalSensation}
              unity="°C"
              name="Sensação Térmica"
              icon={FiThermometer}
              color="#7aa3ae"
            />
          </SwiperSlide>
          <SwiperSlide>
            <WeatherBox
              data={weatherStationData.soilMoisture}
              unity={
                typeof weatherStationData.soilMoisture === 'string' ? '' : '%'
              }
              name="Umidade do Solo"
              icon={FiDroplet}
              color="#8a8786"
            />
          </SwiperSlide>
          <SwiperSlide>
            <WeatherBox
              data={weatherStationData.rainfallIndex}
              unity="mm"
              name="Índice Pluviométrico"
              icon={FiCloudDrizzle}
              color="#859aa2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <WeatherBox
              data={weatherStationData.leafWetness}
              unity={
                typeof weatherStationData.leafWetness === 'string' ? '' : '%'
              }
              name="Molhamento Foliar"
              icon={FiFeather}
              color="#718b7d"
            />
          </SwiperSlide>
          <SwiperSlide>
            <WeatherBox
              data={weatherStationData.luminosity}
              unity={
                typeof weatherStationData.leafWetness === 'string' ? '' : 'Lux'
              }
              name="Luminosidade"
              icon={FiSun}
              color="#d7c27a"
            />
          </SwiperSlide>
          <SwiperSlide>
            <WeatherBox
              data={weatherStationData.ultravioletIndex}
              unity="Uv"
              name="Índice Ultravioleta"
              icon={FiSun}
              color="#a19583"
            />
          </SwiperSlide>
          <SwiperSlide>
            <WeatherBox
              data={weatherStationData.atmosphericPressure}
              unity="hpa"
              name="Pressão Atmosférica"
              icon={FiArrowDownCircle}
              color="#7fb2bb"
            />
          </SwiperSlide>
          <SwiperSlide>
            <WeatherBox
              data={weatherStationData.windSpeed}
              unity="Km/h"
              name="Velocidade do Vento"
              icon={FiWind}
              color="#9f9394"
            />
          </SwiperSlide>
          <SwiperSlide>
            <WeatherBox
              data={weatherStationData.altitude}
              unity={
                typeof weatherStationData.leafWetness === 'string' ? '' : 'm'
              }
              name="Altitude"
              icon={FiTrendingUp}
              color="#947c95"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <LastWeatherReading>
        <div>
          <strong>Última Leitura</strong>
          <p>{formatTime}</p>
        </div>
      </LastWeatherReading>
    </CarouselContainer>
  );
}

export default WeatherCarousel;
