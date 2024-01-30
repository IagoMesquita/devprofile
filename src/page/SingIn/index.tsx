import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Input } from '../../components/Forms/Input';
import { Container, Content, CreateAccount, CreateAccountTitle, ForgotPasswordButtom, ForgotPasswordText, Icon, Logo, Title } from './styles';
import { Buttom } from '../../components/Forms/Buttom';
import logo from '../../assets/logo.png';

export default function SingIn() {
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
            <Logo source={logo} />
            <View>
              <Title>Faça seu login</Title>
            </View>
            <Input placeholder="Email" />
            <Input placeholder="Senha" />
            <Buttom title="Entrar" />
            <ForgotPasswordButtom>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPasswordButtom>
          </Content>
        </Container>
      </ScrollView>
      <CreateAccount>
        <Icon name="log-in" />
        <CreateAccountTitle>Criar uma conta</CreateAccountTitle>
      </CreateAccount>
    </KeyboardAvoidingView>
  )
}