import { ScrollView } from "react-native";
import { Input } from "../../components/Forms/Input";
import { Container, Content, Title } from "./styles";
import { Buttom } from "../../components/Forms/Buttom";


export default function SingIn() {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Content>
          <Title>Faça seu login</Title>
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Buttom title="Entrar"/>
        </Content>
      </Container>
    </ScrollView>
  )
}