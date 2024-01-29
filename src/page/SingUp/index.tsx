import { ScrollView } from "react-native";
import { Input } from "../../components/Forms/Input";
import { Container, Content, Title } from "./styles";
import { Buttom } from "../../components/Forms/Buttom";

export default function SingUp() {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Content>
          <Title>Crie sua conta</Title>
          <Input placeholder="Nome completo" />
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Buttom title="Criar conta" />
        </Content>
      </Container>
    </ScrollView>
  );
}
