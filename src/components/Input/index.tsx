import React, { forwardRef, InputHTMLAttributes, LegacyRef } from 'react';

import { IconBaseProps } from 'react-icons';
import { FieldError } from 'react-hook-form';

import { Container, ErrorMessage } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: Record<string, unknown>;
  name: string;
  Icon?: React.ComponentType<IconBaseProps>;
  error?: FieldError;
}

//: ForwardRefRenderFunction<HTMLInputElement, InputProps>

function InputBase(
  { containerStyle = {}, name, Icon, error, ...rest }: InputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <>
      <Container style={containerStyle} isErrored={!!error}>
        {Icon && <Icon size={20} />}
        <input name={name} id={name} ref={ref} {...rest} />
      </Container>

      <ErrorMessage isErrored={!!error}>
        {!!error && <span>{error.message}</span>}
      </ErrorMessage>
    </>
  );
}

export const Input = forwardRef(InputBase);
