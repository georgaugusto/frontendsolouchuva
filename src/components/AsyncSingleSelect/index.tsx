import AsyncSelect from 'react-select/async';
import { StylesConfig } from 'react-select';

import { SelectContainer } from './styles';

const customStyles: StylesConfig = {
  container: provided => ({
    ...provided,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '1rem',
    lineHeight: '130%',

    border: 'none',
    backgroundColor: '#EDEEF4',

    borderRadius: '0.75rem',
  }),

  control: provided => ({
    ...provided,
    backgroundColor: 'none',

    border: 'none',
    boxShadow: 'none',

    cursor: 'pointer',
  }),

  dropdownIndicator: provided => ({
    ...provided,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontSize: '1.125rem',
    color: '#242424',
    border: 'none',

    cursor: 'pointer',
  }),

  option: (provided, state) => ({
    ...provided,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: state.isSelected ? 'bold' : 'normal',
    fontSize: '1rem',
    lineHeight: '130%',

    color: state.isSelected ? '#242424' : '#41434B',

    backgroundColor: 'none',
    padding: '0.25rem 0.625rem',
  }),

  placeholder: (provided, state) => ({
    ...provided,
    fontWeight: 'normal',
    color: state.isDisabled ? '#b5b5b5' : '#979191',
  }),
};

function AsyncSingleSelect({ optionsData, ...rest }: any) {
  const filter = (inputValue: string) =>
    optionsData.filter((option: any) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase()),
    );

  const loadOptions = (inputValue: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(filter(inputValue));
      }, 1000);
    });
  };

  return (
    <SelectContainer>
      <AsyncSelect
        cacheOptions
        defaultOptions
        loadOptions={loadOptions}
        styles={customStyles}
        isSearchable={false}
        components={{
          IndicatorSeparator: () => null,
        }}
        {...rest}
      />
    </SelectContainer>
  );
}

export default AsyncSingleSelect;
