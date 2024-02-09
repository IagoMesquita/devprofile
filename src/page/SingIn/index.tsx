import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Container, Content, CreateAccount, CreateAccountTitle, ForgotPasswordButtom, ForgotPasswordText, Icon, Logo, Title } from './styles';
import { InputControl } from '../../components/Forms/InputControl';
import { Buttom } from '../../components/Forms/Buttom';
import logo from '../../assets/logo.png';

import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from 'react';
import { useAuth } from '../../Hooks/useAuth';


interface ScreenNavigationProps {
  navigate: (screen: string) => void;
}

const schemaSingIn = yup.object({
  email: yup.string().email('Email inválido').required('Email é um campo obrigatório'),
  password: yup.string().required('Senha é um campo obrigatório'),
})

type FormData = yup.InferType<typeof schemaSingIn>;

// interface IFormInputs extends FieldValues {
//   email?: string;
//   password?: string;
// }


export default function SingIn() {

  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation<ScreenNavigationProps>()

  const { control, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    resolver: yupResolver(schemaSingIn),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const { singIn } = useAuth();

  const handleSingIn = (form: FormData) => {
    const data = {
      email: form.email,
      password: form.password,
    }

    try {
      setIsLoading(true);
      singIn(data)
    } catch (error) {
      console.error('ERROR', error as string) 
    } finally{
      setIsLoading(false)
    }

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
            <InputControl
              control={control} name='email' placeholder='Digite seu email' 
              error={errors.email && errors?.email?.message}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
            />
            <InputControl control={control} name='password' placeholder='Digite seu senha'  
              error={errors.password && errors?.password?.message}
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry
            />
            <Buttom title="Entrar" onPress={handleSubmit(handleSingIn)} disabled={isLoading}/>
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
