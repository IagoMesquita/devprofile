import { Input } from "../../components/Forms/Input";
import { Container, Content, Title } from "./styles";


export default function SingIn() {
  return (
    <Container>
      <Content>
        <Title>Faça seu login</Title>
        <Input placeholder="Email"/>
        <Input placeholder="Senha"/>
      </Content>
    </Container>
  )
}