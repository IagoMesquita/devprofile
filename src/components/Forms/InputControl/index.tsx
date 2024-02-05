import { FunctionComponent } from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { Container, Error } from "./styles";
import { Input } from '../Input';

interface InputProps extends TextInputProps {
  control: Control,
  name: string,
  error: string | undefined
}

export const InputControl: FunctionComponent<InputProps> = ({
  control,
  name,
  error,
  ...otherProps
}) => {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          < Input
            placeholder={otherProps.placeholder}
            onChangeText={onChange}
            value={value}
            {...otherProps}
          />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  )
}