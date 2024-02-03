import { FunctionComponent } from 'react';
import { TextInputProps } from 'react-native';
import { Control } from 'react-hook-form';

import { Container } from "./styles";
import theme from "../../../global/styles/theme";

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
    <Container/>
  )
}