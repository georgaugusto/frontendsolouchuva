import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { Container } from './styles';

interface IWeatherStationData {
  compact: boolean;
  compactCalendar: boolean;
  areaChartData: any[] | undefined;
  graphiclabel: string;
  dataKey: string;
  unit: string;
  stroke: string;
}

function ReactGraphic({
  compact,
  compactCalendar,
  areaChartData,
  graphiclabel,
  dataKey,
  unit,
  stroke,
}: IWeatherStationData) {
  return (
    <Container compact={compact} compactCalendar={compactCalendar}>
      <ResponsiveContainer>
        <AreaChart data={areaChartData}>
          <defs>
            <linearGradient id={dataKey}>
              <stop offset="5%" stopColor={stroke} stopOpacity={0.8} />
              <stop offset="95%" stopColor={stroke} stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip
            wrapperStyle={{ zIndex: 10 }}
            labelFormatter={(label: any) => [`Horário : ${label}h`]}
            formatter={(value: any) => [`${value}${unit}`, `${graphiclabel}`]}
          />
          <XAxis dataKey="dt" unit="h" />
          <YAxis unit={unit} />
          <Area
            type="monotone"
            dataKey={dataKey}
            dot={{ stroke, strokeWidth: 1 }}
            stroke={stroke}
            fillOpacity={0.2}
            fill={stroke}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
}

export default ReactGraphic;
