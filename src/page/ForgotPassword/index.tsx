import { Alert, KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Input } from "../../components/Forms/Input";
import { BackToSingIn, BackToSingInTitle, Container, Content, Icon, Logo, Title } from "./styles";
import { Buttom } from "../../components/Forms/Buttom";
import logo from '../../assets/logo.png';
import { InputControl } from "../../components/Forms/InputControl";

import { useNavigation } from '@react-navigation/native';
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from "../../services/api";

interface ScreenNavigationProps {
  goBack: () => void;
}

interface IFormInputs {
  [name: string]: any;
}

const schemaSingUp = yup.object({
  email: yup.string().email('Email inválido').required('Email é um campo obrigatório'),
})


export default function ForgotPassword() {
  const navigation = useNavigation<ScreenNavigationProps>()

  const { control, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    resolver: yupResolver(schemaSingUp),
    defaultValues: {
      email: "",
    }
  })


  const handleForgotPassword = async (form: IFormInputs) => {
    const data = {
      email: form.email,
    } 

    try {
      await api.post('password/forgot', data);
      Alert.alert(
        'Email enviado.', 
        'Você receberá um e-mail com as intruções para redefinição de senha.'
        )
    } catch (error) {
      console.log("Error", error as String);
      Alert.alert('Erro no cadastro', 'Ocorreu um erro ao realiza cadastro. Tente novamente.')
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
              <Title>Crie sua conta</Title>
            </View>
            <InputControl control={control} name='email' placeholder='Digite seu email'
              error={errors.email && errors?.email?.message}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
            />
            <Buttom title="Criar conta"  onPress={handleSubmit(handleForgotPassword)}/>
          </Content>
        </Container>
      </ScrollView>
      <BackToSingIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" />
        <BackToSingInTitle>Voltar para Login</BackToSingInTitle>
      </BackToSingIn>
    </KeyboardAvoidingView>
  );
}
