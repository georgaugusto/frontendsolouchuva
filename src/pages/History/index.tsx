import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Controller, useForm } from 'react-hook-form';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'moment/locale/pt-br';
import {
  AreaChart,
  Line,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Label,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import 'react-datetime/css/react-datetime.css';

import axios from 'axios';
import {
  FiArrowDownCircle,
  FiCalendar,
  FiCloudDrizzle,
  FiDroplet,
  FiFeather,
  FiSun,
  FiThermometer,
  FiWind,
} from 'react-icons/fi';
import {
  Container,
  HistoryContext,
  Heeader,
  HeaderTitle,
  HeaderSubtitle,
  CalendarInside,
  WeatherHistorySection,
  WeatherGraphicSection,
  CalendarOut,
} from './styles';
import Box from './Box';
import LayoutContext from '../../contexts/layout';
import AsyncSingleSelect from '../../components/AsyncSingleSelect';
import ReactCalendar from './ReactCalendar';
import ReactGraphic from './Graphic';

interface IWeatherStationItem {
  avg: number | string;
  max?: number | string;
  min?: number | string;
  dtMax?: number | string;
  dtMin?: number | string;
}

interface IWeatherStationData {
  temperature: IWeatherStationItem;
  airHumidity: IWeatherStationItem;
  thermalSensation: IWeatherStationItem;
  soilMoisture: IWeatherStationItem;
  rainfallIndex: IWeatherStationItem;
  leafWetness: IWeatherStationItem;
  luminosity: IWeatherStationItem;
  ultravioletIndex: IWeatherStationItem;
  atmosphericPressure: IWeatherStationItem;
  windSpeed: IWeatherStationItem;
  windDirection: IWeatherStationItem;
  altitude: IWeatherStationItem;
  lastRead: IWeatherStationItem;
}

interface IWeatherStationGraphicItem {
  label: string;
  dataKey: string;
  unit: string;
  stroke: string;
}

interface IWeatherStationGraphicData {
  temperature: IWeatherStationGraphicItem;
  airHumidity: IWeatherStationGraphicItem;
  thermalSensation: IWeatherStationGraphicItem;
  soilMoisture: IWeatherStationGraphicItem;
  rainfallIndex: IWeatherStationGraphicItem;
  leafWetness: IWeatherStationGraphicItem;
  luminosity: IWeatherStationGraphicItem;
  ultravioletIndex: IWeatherStationGraphicItem;
  atmosphericPressure: IWeatherStationGraphicItem;
  windSpeed: IWeatherStationGraphicItem;
  windDirection: IWeatherStationGraphicItem;
  altitude: IWeatherStationGraphicItem;
  lastRead: IWeatherStationGraphicItem;
}

interface IOpenWeatherMapAPI3Data {
  lat: number; //City geo location, latitude
  lon: number; //City geo location, longitude
  timezone: number; //Shift in seconds from UTC
  timezone_offset: number;
  current?: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    rain?: {
      '1h': number;
    };
    snow?: {
      '1h': number;
    };
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      },
    ];
  };
  minutely?: [
    {
      dt: number;
      precipitation: number;
    },
  ];
  hourly?: [
    {
      dt: number;
      temp: number;
      feels_like: number;
      pressure: number;
      humidity: number;
      dew_point: number;
      uvi: number;
      clouds: number;
      visibility: number;
      wind_speed: number;
      wind_deg: number;
      wind_gust: number;
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        },
      ];
      pop: number;
    },
  ];
  daily?: [
    {
      dt: number;
      sunrise: number;
      sunset: number;
      moonrise: number;
      moonset: number;
      moon_phase: number;
      temp: {
        day: number;
        min: number;
        max: number;
        night: number;
        eve: number;
        morn: number;
      };
      feels_like: {
        day: number;
        night: number;
        eve: number;
        morn: number;
      };
      pressure: number;
      humidity: number;
      dew_point: number;
      wind_speed: number;
      wind_deg: number;
      wind_gust: number;
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        },
      ];
      clouds: number;
      pop: number;
      rain: number;
      uvi: number;
    },
  ];
  alerts?: [
    {
      sender_name: string;
      event: string;
      start: number;
      end: number;
      description: string;
      tags: string[];
    },
  ];
}

const INITIAL_WEATHER_STATION_GRAPHIC = {
  temperature: {
    label: 'Temperatura',
    dataKey: 'temp',
    unit: '°C',
    stroke: '#bf746d',
  },
  airHumidity: {
    label: 'Umidade do Ar',
    dataKey: 'humidity',
    unit: '%',
    stroke: '#d19f89',
  },
  thermalSensation: {
    label: 'Sensação Térmica',
    dataKey: 'feels_like',
    unit: '°C',
    stroke: '#7aa3ae',
  },
  soilMoisture: {
    label: 'Umidade do Solo',
    dataKey: '',
    unit: '%',
    stroke: '#8a8786',
  },
  rainfallIndex: {
    label: 'Índice Pluviométrico',
    dataKey: 'rain',
    unit: 'mm',
    stroke: '#859aa2',
  },
  leafWetness: {
    label: 'Molhamento Foliar',
    dataKey: '',
    unit: '%',
    stroke: '#718b7d',
  },
  luminosity: {
    label: 'Luminosidade',
    dataKey: '',
    unit: 'Lux',
    stroke: '#d7c27a',
  },
  ultravioletIndex: {
    label: 'Índice Ultravioleta',
    dataKey: 'uvi',
    unit: 'Uv',
    stroke: '#a19583',
  },
  atmosphericPressure: {
    label: 'Pressão Atmosférica',
    dataKey: 'pressure',
    unit: 'hpa',
    stroke: '#7fb2bb',
  },
  windSpeed: {
    label: 'Velocidade do Vento',
    dataKey: 'wind_speed',
    unit: 'Km/h',
    stroke: '#9f9394',
  },
  altitude: { label: 'Altitude', dataKey: '', unit: 'm', stroke: '#947c95' },
};

const INITIAL_WEATHER_STATION_ITEM = {
  avg: 0,
  max: 0,
  min: 0,
  dtMax: 0,
  dtMin: 0,
};

const graphic = {
  dataKey: '',
  unit: '',
  stroke: '',
};

const INITIAL_WEATHER_STATION_DATA = {
  temperature: INITIAL_WEATHER_STATION_ITEM,
  airHumidity: INITIAL_WEATHER_STATION_ITEM,
  thermalSensation: INITIAL_WEATHER_STATION_ITEM,
  soilMoisture: INITIAL_WEATHER_STATION_ITEM,
  rainfallIndex: INITIAL_WEATHER_STATION_ITEM,
  leafWetness: INITIAL_WEATHER_STATION_ITEM,
  luminosity: INITIAL_WEATHER_STATION_ITEM,
  ultravioletIndex: INITIAL_WEATHER_STATION_ITEM,
  atmosphericPressure: INITIAL_WEATHER_STATION_ITEM,
  windSpeed: INITIAL_WEATHER_STATION_ITEM,
  windDirection: INITIAL_WEATHER_STATION_ITEM,
  altitude: INITIAL_WEATHER_STATION_ITEM,
  lastRead: INITIAL_WEATHER_STATION_ITEM,
};

function History() {
  const { control, watch, setValue } = useForm();

  const [selectedDate, setSelectedDate] = useState();
  const [weatherStationData, setWeatherStationData] =
    useState<IWeatherStationData>(INITIAL_WEATHER_STATION_DATA);
  //const [weatherStationGraphic, setWeatherStationGraphic] =
  //useState('temperature');
  const [weatherStationGraphic, setWeatherStationGraphic] =
    useState<IWeatherStationGraphicItem>({
      label: 'Temperatua',
      dataKey: 'temp',
      unit: '°C',
      stroke: '#bf746d',
    });
  const [requestError, setRequestError] = useState<boolean>(false);
  const [compactCalendar, setCompactCalendar] = useState<boolean>(false);
  const [openWeatherMapApi, setOpenWeatherMapApiData] = useState();
  const [opencurrentAndForecastWeatherData, setCurrentAndForecastWeatherData] =
    useState();

  const [isOnline, setisOnline] = useState<boolean>(false);
  const [selectedStation, setSelectedStation] = useState({
    value: '1',
    label: 'Open Weather Map Api',
  });

  const { compact, setCompact } = useContext(LayoutContext);

  const openWeatherMap = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

  const watchCalendar = watch('calendar');

  const optionsData = [
    {
      value: '0',
      label: `Protótipo 0 - Larangeiras ${isOnline ? '' : '(Offline)'}`,
    },
    { value: '1', label: 'Open Weather Map Api' },
  ];

  const selectedDateAsText = useMemo(() => {
    return moment(selectedDate).format('[Dia] D [de] MMMM');
  }, [selectedDate]);

  const selectedWeekDay = useMemo(() => {
    return moment(selectedDate).format('dddd');
  }, [selectedDate]);

  const isValidDateAfeter = useCallback((current: any) => {
    const afeter = moment();
    return current.isBefore(afeter);
  }, []);

  useEffect(() => {
    setValue('calendar', moment(new Date()));
  }, [setValue]);

  useEffect(() => {
    if (watchCalendar) setSelectedDate(watchCalendar);
  }, [watchCalendar]);

  useEffect(() => {
    async function getWeatherData() {
      const dtUnix = moment(selectedDate).unix();
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/3.0/onecall/timemachine?lat=-22.63807&lon=-50.407451&units=metric&lang=pt_br&dt=${dtUnix}&appid=${openWeatherMap}`,
        );

        const getRain =
          response.data.data[0].rain !== undefined
            ? Object.values(response.data.data[0].rain)
            : [0];
        const rain = getRain[1] ? getRain[1] : getRain[0];

        setOpenWeatherMapApiData(response.data);
        setWeatherStationData({
          temperature: {
            avg: response.data.data[0].temp,
            max: 0,
            min: 0,
            dtMax: 0,
            dtMin: 0,
          },
          airHumidity: {
            avg: response.data.data[0].humidity,
            max: 0,
            min: 0,
            dtMax: 0,
            dtMin: 0,
          },
          thermalSensation: {
            avg: response.data.data[0].feels_like,
            max: 0,
            min: 0,
            dtMax: 0,
            dtMin: 0,
          },
          soilMoisture: {
            avg: '-',
            max: 0,
            min: 0,
            dtMax: 0,
            dtMin: 0,
          },
          rainfallIndex: {
            avg: rain as number,
            max: 0,
            min: 0,
            dtMax: 0,
            dtMin: 0,
          },
          leafWetness: {
            avg: '-',
            max: 0,
            min: 0,
            dtMax: 0,
            dtMin: 0,
          },
          luminosity: {
            avg: '-',
            max: 0,
            min: 0,
            dtMax: 0,
            dtMin: 0,
          },
          ultravioletIndex: {
            avg: response.data.data[0].uvi,
            max: 0,
            min: 0,
            dtMax: 0,
            dtMin: 0,
          },
          atmosphericPressure: {
            avg: response.data.data[0].pressure,
            max: 0,
            min: 0,
            dtMax: 0,
            dtMin: 0,
          },
          windSpeed: {
            avg: response.data.data[0].wind_speed,
            max: 0,
            min: 0,
            dtMax: 0,
            dtMin: 0,
          },
          windDirection: {
            avg: response.data.data[0].wind_deg,
            max: 0,
            min: 0,
            dtMax: 0,
            dtMin: 0,
          },
          altitude: {
            avg: '-',
            max: 0,
            min: 0,
            dtMax: 0,
            dtMin: 0,
          },
          lastRead: {
            avg: '-',
            max: 0,
            min: 0,
            dtMax: 0,
            dtMin: 0,
          },
        });
      } catch (error) {
        setRequestError(true);
      }
    }
    if (selectedDate) getWeatherData();
  }, [selectedDate, openWeatherMap]);

  useEffect(() => {
    async function getWeatherDataByCity() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/3.0/onecall?lat=-22.63807&lon=-50.407451&units=metric&lang=pt_br&appid=${openWeatherMap}`,
        );

        const convertUnixToHours = response.data.hourly.map((obj: any) => ({
          ...obj,
          dt: Intl.DateTimeFormat('pt-BR', {
            hour: '2-digit',
          }).format(obj.dt * 1000),
        }));

        setCurrentAndForecastWeatherData(convertUnixToHours);
      } catch (error) {
        setRequestError(true);
      }
    }
    getWeatherDataByCity();
  }, [openWeatherMap]);

  return (
    <Container>
      <HistoryContext>
        <Heeader>
          <HeaderTitle>
            <h1>Históricos Meteorológicos</h1>
            <AsyncSingleSelect
              optionsData={optionsData}
              onChange={setSelectedStation}
              value={selectedStation}
            />
          </HeaderTitle>

          <HeaderSubtitle>
            {moment(selectedDate).isSame(moment()) && <span>Hoje</span>}
            <span>{selectedDateAsText}</span>
            <span>{`${selectedWeekDay}`}</span>
            <FiCalendar
              size={24}
              onClick={() => setCompactCalendar(!compactCalendar)}
            />
          </HeaderSubtitle>
          <CalendarInside compactCalendar={compactCalendar}>
            <ReactCalendar control={control} isValidDate={isValidDateAfeter} />
          </CalendarInside>
        </Heeader>

        <WeatherHistorySection>
          <Box
            unity="°C"
            name="Temperatura"
            avg={weatherStationData?.temperature.avg}
            //max={weatherStationData?.temperature.avg}
            //min={weatherStationData?.temperature.avg}
            icon={FiThermometer}
            onClick={() =>
              setWeatherStationGraphic(
                INITIAL_WEATHER_STATION_GRAPHIC.temperature,
              )
            }
          />
          <Box
            unity="°C"
            name="Sensação Térmica"
            avg={weatherStationData?.thermalSensation.avg}
            icon={FiThermometer}
            onClick={() =>
              setWeatherStationGraphic(
                INITIAL_WEATHER_STATION_GRAPHIC.thermalSensation,
              )
            }
          />
          <Box
            unity="%"
            name="Umidade do Ar"
            avg={weatherStationData?.airHumidity.avg}
            icon={FiDroplet}
            onClick={() =>
              setWeatherStationGraphic(
                INITIAL_WEATHER_STATION_GRAPHIC.airHumidity,
              )
            }
          />
          <Box
            unity="%"
            name="Umidade do Solo"
            avg={weatherStationData?.soilMoisture.avg}
            icon={FiDroplet}
            onClick={() =>
              setWeatherStationGraphic(
                INITIAL_WEATHER_STATION_GRAPHIC.soilMoisture,
              )
            }
          />
          <Box
            unity="mm"
            name="Índice Pluviométrico"
            avg={weatherStationData?.rainfallIndex.avg}
            icon={FiCloudDrizzle}
            onClick={() =>
              setWeatherStationGraphic(
                INITIAL_WEATHER_STATION_GRAPHIC.rainfallIndex,
              )
            }
          />
          <Box
            unity="%"
            name="Molhamento Foliar"
            avg={weatherStationData?.leafWetness.avg}
            icon={FiFeather}
            onClick={() =>
              setWeatherStationGraphic(
                INITIAL_WEATHER_STATION_GRAPHIC.leafWetness,
              )
            }
          />
          <Box
            unity="Lux"
            name="Luminosidade"
            avg={weatherStationData?.luminosity.avg}
            icon={FiSun}
            onClick={() =>
              setWeatherStationGraphic(
                INITIAL_WEATHER_STATION_GRAPHIC.luminosity,
              )
            }
          />
          <Box
            unity="uV"
            name="Índice Ultravioleta"
            avg={weatherStationData?.ultravioletIndex.avg}
            icon={FiSun}
            onClick={() =>
              setWeatherStationGraphic(
                INITIAL_WEATHER_STATION_GRAPHIC.ultravioletIndex,
              )
            }
          />
          <Box
            unity="hpa"
            name="Pressão Atmosférica"
            avg={weatherStationData?.atmosphericPressure.avg}
            icon={FiArrowDownCircle}
            onClick={() =>
              setWeatherStationGraphic(
                INITIAL_WEATHER_STATION_GRAPHIC.atmosphericPressure,
              )
            }
          />
          <Box
            unity="Km/h"
            name="Velocidade do Vento"
            avg={weatherStationData?.windSpeed.avg}
            icon={FiWind}
            onClick={() =>
              setWeatherStationGraphic(
                INITIAL_WEATHER_STATION_GRAPHIC.windSpeed,
              )
            }
          />
        </WeatherHistorySection>

        <WeatherGraphicSection>
          <h3>
            {weatherStationGraphic.label} ({weatherStationGraphic.unit})
          </h3>

          <ReactGraphic
            compact={compact}
            compactCalendar={compactCalendar}
            areaChartData={opencurrentAndForecastWeatherData}
            graphiclabel={weatherStationGraphic.label}
            dataKey={weatherStationGraphic.dataKey}
            unit={weatherStationGraphic.unit}
            stroke={weatherStationGraphic.stroke}
          />
        </WeatherGraphicSection>
      </HistoryContext>

      <CalendarOut compactCalendar={compactCalendar}>
        <ReactCalendar control={control} isValidDate={isValidDateAfeter} />
      </CalendarOut>
    </Container>
  );
}

export default History;
