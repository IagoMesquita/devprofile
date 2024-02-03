import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Container, Content, CreateAccount, CreateAccountTitle, ForgotPasswordButtom, ForgotPasswordText, Icon, Logo, Title } from './styles';
import { InputControl } from '../../components/Forms/InputControl';
import { Buttom } from '../../components/Forms/Buttom';
import logo from '../../assets/logo.png';

import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from "react-hook-form"

interface ScreenNavigationProps {
  navigate: (screen: string) => void;
}

interface IFormData {
  email: string;
  password: string;
}

export default function SingIn() {

  const { control, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    defaultValues:{
      email: "",
      password: ""
    }
  })

  const navigation = useNavigation<ScreenNavigationProps>()
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
            {/* <Input placeholder="Email" /> */}
            {/* <Input placeholder="Senha" /> */}
            <InputControl control={control} name='Email' placeholder='Digite seu email' />
            <InputControl control={control} name='Senha' placeholder='Digite seu senha' />
            <Buttom title="Entrar" />
            <ForgotPasswordButtom>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPasswordButtom>
          </Content>
        </Container>
      </ScrollView>
      <CreateAccount onPress={() => navigation.navigate('SingUp')}>
        <Icon name="log-in" />
        <CreateAccountTitle>Criar uma conta</CreateAccountTitle>
      </CreateAccount>
    </KeyboardAvoidingView>
  )
}
