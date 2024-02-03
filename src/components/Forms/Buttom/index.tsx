import { FunctionComponent } from "react";
import { Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";


interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export  const Buttom: FunctionComponent<ButtonProps> = ({title, ...otherProps}) =>  {
  return (
    <Container {...otherProps}>
      <Title>{title}</Title>
    </Container>
  )
}