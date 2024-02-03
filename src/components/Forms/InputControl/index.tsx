import { FunctionComponent } from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { Container } from "./styles";
import { Input } from '../Input';

interface InputProps extends TextInputProps {
  control: Control,
  name: string,
}

export const InputControl: FunctionComponent<InputProps> = ({
  control,
  name,
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
    </Container>
  )
}