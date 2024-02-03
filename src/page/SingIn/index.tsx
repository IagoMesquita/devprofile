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

// interface IFormInputs  {
//   email: string;
//   password: string;
// }

interface IFormInputs  {
  [name: string]: any;
}

export default function SingIn() {
  const navigation = useNavigation<ScreenNavigationProps>()

  const { control, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const handleSingIn = (form: IFormInputs) => {
    const data = {
      email: form.email,
      password: form.password,
    } 

    console.log(data)
  };

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
            <InputControl control={control} name='email' placeholder='Digite seu email'
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
            />
            <InputControl control={control} name='password' placeholder='Digite seu senha'
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry
            />
            <Buttom title="Entrar"  onPress={handleSubmit(handleSingIn)}/>
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
