import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Input } from "../../components/Forms/Input";
import { Container, Content, Title } from "./styles";
import { Buttom } from "../../components/Forms/Buttom";

export default function SingUp() {
  return (
    <KeyboardAvoidingView
      // enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Content>
            <View>
              <Title>Crie sua conta</Title>
            </View>
            <Input placeholder="Nome completo" />
            <Input placeholder="Email" />
            <Input placeholder="Senha" />
            <Buttom title="Criar conta" />
          </Content>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
