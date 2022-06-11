import { Control, Controller, FieldValues } from 'react-hook-form';
import Datetime from 'react-datetime';

import { Container } from './styles';

interface IWeatherStationData {
  control: Control<FieldValues, any>;
  isValidDate: ((currentDate: any, selectedDate: any) => boolean) | undefined;
}

function ReactCalendar({ control, isValidDate }: IWeatherStationData) {
  return (
    <Container>
      <Controller
        name="calendar"
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <Datetime
              value={value}
              onChange={onChange}
              input={false}
              timeFormat={false}
              isValidDate={isValidDate}
              closeOnClickOutside
              closeOnSelect
            />
          );
        }}
      />
    </Container>
  );
}

export default ReactCalendar;
