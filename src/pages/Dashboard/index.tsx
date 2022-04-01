/*eslint-disable @typescript-eslint/no-non-null-assertion */

import { useContext, useEffect, useMemo, useState } from 'react';
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
import 'pure-react-carousel/dist/react-carousel.es.css';
import axios from 'axios';

import HeaderTitleContext from '../../contexts/headerTitle';
import UserIdentificationContext from '../../contexts/userIdentification';

import {
  Container,
  WeatherInformation,
  WeatherAlerts,
  WeatherAlertsHeader,
  WeatherAlertsBody,
  SectionOne,
  SectionTwo,
  WeatherStationHeader,
  WeatherStationContent,
  GridContent,
  LastWeatherReading,
} from './styles';

import AlertBox from '../../components/DiseaseAlertBox';
import WeatherBox from '../../components/WeatherBox';
import WeatherCarousel from '../../components/Carousel';
import AsyncSingleSelect from '../../components/AsyncSingleSelect';

interface IWeatherStationData {
  temperature: number;
  airHumidity: number;
  thermalSensation: number;
  soilMoisture: number;
  rainfallIndex: number;
  leafWetness: number;
  luminosity: number;
  ultravioletIndex: number;
  atmosphericPressure: number;
  windSpeed: number;
  windDirection: number;
  altitude: number;
  lastRead: number;
}

interface IOpenWeatherMapData {
  coord: {
    lon: number; //City geo location, longitude
    lat: number; //City geo location, latitude
  };
  weather: [
    //(more info Weather condition codes)
    {
      id: number; //Weather condition id
      main: string; //Group of weather parameters (Rain, Snow, Extreme etc.)
      description: string; //Weather condition within the group. You can get the output in your language. Learn more
      icon: string; //Weather icon id
    },
  ];
  base: string; //Internal parameter
  main: {
    temp: number; //Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    feels_like: number; //Temperature. This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    pressure: number; //Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
    humidity: number; //Humidity, %
    temp_min: number; //Minimum temperature at the moment. This is minimal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    temp_max: number; //Maximum temperature at the moment. This is maximal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    sea_level: number; //Atmospheric pressure on the sea level, hPa
    grnd_level: number; //Atmospheric pressure on the ground level, hPa
  };
  wind: {
    speed: number; //Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
    deg: number; //Wind direction, degrees (meteorological)
    gust: number; //Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
  };
  clouds: {
    all: number; //Cloudiness, %
  };
  rain: {
    '1h': number; //Rain volume for the last 1 hour, mm
    '3h': number; //Rain volume for the last 3 hours, mm
  };
  snow: {
    '1h': number; //Snow volume for the last 1 hour, mm
    '3h': number; //Snow volume for the last 3 hours, mm
  };
  dt: number; //Cloudiness, % Time of data calculation, unix, UTC
  sys: {
    type: number; //Internal parameter
    id: number; //Internal parameter
    message: number; //Internal parameter
    country: number; //Country code (GB, JP etc.)
    sunrise: number; //Sunrise time, unix, UTC
    sunset: number; //Sunset time, unix, UTC
  };
  timezone: number; //Shift in seconds from UTC
  id: number; //City ID
  name: string; //City name
  cod: number; //Internal parameter
}

function Dashboard() {
  const user = useContext(UserIdentificationContext);
  const token = localStorage.getItem('@SolouChuva:token');
  const { setHeaderTitle } = useContext(HeaderTitleContext);
  const [openWeatherMapApi, setOpenWeatherMapApiData] =
    useState<IOpenWeatherMapData>();
  const [getState, setGetState] = useState('assis');
  const [state, setState] = useState('assis');
  const [openWeatherMapApiIcon, setOpenWeatherMapApiIcon] = useState<any>();
  const [requestError, setRequestError] = useState<boolean>(false);
  const [isOnline, setisOnline] = useState<boolean>(false);

  const [weatherStationData, setWeatherStationData] = useState<any>({});

  const [selectedStation, setSelectedStation] = useState({
    value: '1',
    label: 'Open Weather Map Api',
  });

  const optionsData = [
    {
      value: '0',
      label: `Protótipo 0 - Larangeiras ${isOnline ? '' : '(Offline)'}`,
    },
    { value: '1', label: 'Open Weather Map Api' },
  ];

  const CutureData = [
    { value: '0', label: 'Milho' },
    { value: '1', label: 'Soja' },
    { value: '2', label: 'Cana-de-açúcar' },
  ];

  const openWeatherMap = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

  useEffect(() => {
    setHeaderTitle('Página Inicial');
  }, [setHeaderTitle]);

  useEffect(() => {
    async function getWeatherDataByCity() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${state}&units=metric&lang=pt_br&appid=${openWeatherMap}`,
        );
        setOpenWeatherMapApiIcon(
          `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
        );

        const getRain =
          response.data?.rain !== undefined
            ? Object.values(response.data?.rain)
            : [0];
        const rain = getRain[1] ? getRain[1] : getRain[0];

        setOpenWeatherMapApiData(response.data);
        setWeatherStationData({
          temperature: response.data.main.temp,
          airHumidity: response.data.main.humidity,
          thermalSensation: response.data.main.feels_like,
          soilMoisture: 0,
          rainfallIndex: rain,
          leafWetness: 0,
          luminosity: 0,
          ultravioletIndex: 0,
          atmosphericPressure: response.data.main.grnd_level,
          windSpeed: response.data.wind.speed,
          altitude: 0,
          lastRead: response.data.dt * 1000,
        });
      } catch (error) {
        setRequestError(true);
      }
    }
    if (Number(selectedStation.value) === 1) getWeatherDataByCity();
  }, [openWeatherMap, state, selectedStation.value]);

  useEffect(() => {
    async function getWeatherStationData() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/weatherstation`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setWeatherStationData({
          temperature: response.data.dht22Temperature,
          airHumidity: response.data.dht22Moisture,
          thermalSensation: response.data.thermalSensation,
          soilMoisture: response.data.csmsv12Soil,
          rainfallIndex: response.data.pluviometer,
          leafWetness: response.data.mhrdWetting,
          luminosity: response.data.bh1750Brightness,
          ultravioletIndex: response.data.uvm30aIndexUv,
          atmosphericPressure: response.data.bmp280Pressure,
          windSpeed: response.data.anemometer,
          altitude: response.data.bmp280Altitude,
          lastRead: response.data.timestamp,
        });
      } catch (error) {
        setRequestError(true);
      }
    }
    if (Number(selectedStation.value) === 0) getWeatherStationData();
  }, [token, selectedStation.value]);

  const formatTime = useMemo(() => {
    return Intl.DateTimeFormat('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(weatherStationData.lastRead);
  }, [weatherStationData.lastRead]);

  const temperatureAlert = useMemo(() => {
    if (weatherStationData.thermalSensation) {
      return (
        <>
          {weatherStationData.thermalSensation > 54 && (
            <AlertBox
              title="Sensação térmica superior à 54°C - Perigo Extremo"
              description="Hipertermia e câimbras de calor iminentes"
              link=""
              color="danger"
            />
          )}
          {weatherStationData.thermalSensation > 41 &&
            weatherStationData.thermalSensation <= 54 && (
              <AlertBox
                title="Sensação térmica superior à 41°C - Perigo"
                description="Hipertermia e câimbras de calor prováveis"
                link=""
                color="danger"
              />
            )}
          {weatherStationData.thermalSensation > 32 &&
            weatherStationData.thermalSensation <= 41 && (
              <AlertBox
                title="Sensação térmica superior à 32°C - Muita Atenção"
                description="Hipertermia e câimbras de calor possíveis"
                link=""
                color="danger"
              />
            )}
          {weatherStationData.thermalSensation > 27 &&
            weatherStationData.thermalSensation <= 32 && (
              <AlertBox
                title="Sensação térmica superior à 27°C - Atenção"
                description="Possibilidade de fadiga após exposição e atividade prolongadas"
                link="tetess"
                color="warning"
              />
            )}
          {weatherStationData.thermalSensation <= 27 && (
            <AlertBox
              title="Por enquanto você não possui alertas!"
              description=""
              link=""
              color="low"
            />
          )}
        </>
      );
    }
    return <> </>;
  }, [weatherStationData.thermalSensation]);

  return (
    <Container>
      <SectionOne>
        <WeatherInformation>
          <div>
            <strong>
              {`Olá, ${
                user && user.name?.substring(0, user.name?.lastIndexOf(' '))
              }`}
            </strong>

            <span>
              Bem-vindo ao aplicativo! A qualidade do ar é boa e fresca, você
              pode sair hoje sem preocupações, mas não se esqueça do protetor
              solar.
            </span>

            <div>
              <img src={openWeatherMapApiIcon} alt="" />
              <p>{openWeatherMapApi?.weather[0].description}</p>
            </div>
          </div>
        </WeatherInformation>

        <WeatherCarousel
          optionsData={optionsData}
          onChange={setSelectedStation}
          value={selectedStation}
        />

        <WeatherAlerts>
          <WeatherAlertsHeader>
            <strong>Cultura</strong>
            <AsyncSingleSelect optionsData={CutureData} />
          </WeatherAlertsHeader>

          <WeatherAlertsBody>
            <strong>Alertas pessoais!</strong>

            {temperatureAlert}

            <strong>Alertas de culturas!</strong>
            <AlertBox
              title="Por enquanto você não possui alertas!"
              description=""
              link=""
              color="low"
            />
          </WeatherAlertsBody>
        </WeatherAlerts>
      </SectionOne>

      <SectionTwo>
        <WeatherStationHeader>
          <AsyncSingleSelect
            optionsData={optionsData}
            onChange={setSelectedStation}
            value={selectedStation}
          />
        </WeatherStationHeader>

        <WeatherStationContent>
          <GridContent>
            <WeatherBox
              data={weatherStationData.temperature}
              unity="°C"
              name="Temperatura"
              icon={FiThermometer}
              color="#bf746d"
            />
            <WeatherBox
              data={weatherStationData.airHumidity}
              unity="%"
              name="Umidade do Ar"
              icon={FiDroplet}
              color="#d19f89"
            />
          </GridContent>
          <GridContent>
            <WeatherBox
              data={weatherStationData.thermalSensation}
              unity="°C"
              name="Sensação Térmica"
              icon={FiThermometer}
              color="#7aa3ae"
            />
            <WeatherBox
              data={weatherStationData.soilMoisture}
              unity="%"
              name="Umidade do Solo"
              icon={FiDroplet}
              color="#8a8786"
            />
          </GridContent>
          <GridContent>
            <WeatherBox
              data={weatherStationData.rainfallIndex}
              unity="mm"
              name="Índice Pluviométrico"
              icon={FiCloudDrizzle}
              color="#859aa2"
            />
            <WeatherBox
              data={weatherStationData.leafWetness}
              unity="%"
              name="Molhamento Foliar"
              icon={FiFeather}
              color="#718b7d"
            />
          </GridContent>
          <GridContent>
            <WeatherBox
              data={weatherStationData.luminosity}
              unity="Lux"
              name="Luminosidade"
              icon={FiSun}
              color="#d7c27a"
            />
            <WeatherBox
              data={weatherStationData.ultravioletIndex}
              unity="Uv"
              name="Índice Ultravioleta"
              icon={FiSun}
              color="#a19583"
            />
          </GridContent>
          <GridContent>
            <WeatherBox
              data={weatherStationData.atmosphericPressure}
              unity="hpa"
              name="Pressão Atmosférica"
              icon={FiArrowDownCircle}
              color="#7fb2bb"
            />
            <WeatherBox
              data={weatherStationData.windSpeed}
              unity="Km/h"
              name="Velocidade do Vento"
              icon={FiWind}
              color="#9f9394"
            />
          </GridContent>
          <GridContent>
            <WeatherBox
              data={weatherStationData.altitude}
              unity="m"
              name="Altitude"
              icon={FiTrendingUp}
              color="#947c95"
            />
          </GridContent>
          <LastWeatherReading>
            <div>
              <strong>Última Leitura</strong>
              <p>{formatTime}</p>
            </div>
          </LastWeatherReading>
        </WeatherStationContent>
      </SectionTwo>
    </Container>
  );
}

export default Dashboard;
