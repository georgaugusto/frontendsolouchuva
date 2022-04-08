import { forwardRef, InputHTMLAttributes, LegacyRef } from 'react';
import { FieldError } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';

import { Container, ErrorMessage } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: Record<string, unknown>;
  name: string;
  label?: string;
  error?: FieldError;
  loading?: any;
  icon: React.ComponentType<IconBaseProps>;
  onClickIcon: () => void;
}

export function InputBase(
  {
    containerStyle = {},
    name,
    label,
    error,
    loading,
    onClickIcon,
    icon: Icon,
    ...rest
  }: InputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <Container style={containerStyle} isErrored={!!error}>
      {!!label && <label htmlFor={name}>{label}</label>}

      <div>
        <input name={name} id={name} ref={ref} size={1} {...rest} />

        {Icon && loading ? <>.</> : <Icon size={24} onClick={onClickIcon} />}
      </div>

      <ErrorMessage isErrored={!!error}>
        {!!error && <span>{error.message}</span>}
      </ErrorMessage>
    </Container>
  );
}

export const SearchInput = forwardRef(InputBase);
