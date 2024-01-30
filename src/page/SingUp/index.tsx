import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Input } from "../../components/Forms/Input";
import { BackToSingIn, BackToSingInTitle, Container, Content, Icon, Logo, Title } from "./styles";
import { Buttom } from "../../components/Forms/Buttom";
import logo from '../../assets/logo.png';


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
            <Logo source={logo}/>
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
      <BackToSingIn>
        <Icon name="arrow-left" />
        <BackToSingInTitle>Voltar para Login</BackToSingInTitle>
      </BackToSingIn>
    </KeyboardAvoidingView>
  );
}
