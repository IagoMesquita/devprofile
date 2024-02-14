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
  navigate: (screen: string) => void;
}

interface IFormInputs {
  [name: string]: any;
}

const schemaSingUp = yup.object({
  token: yup.string().uuid('Código inválido').required('Informe o código.'),
  password: yup.string().required('Informe a nova senha.'),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'As senha não correspondem.')
})


export default function ResetPassword() {
  const navigation = useNavigation<ScreenNavigationProps>()

  const { control, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    resolver: yupResolver(schemaSingUp),
    defaultValues: {
      token: "",
      password: "",
      password_confirmation: ""
    }
  })


  const handleResetPassword = async (form: IFormInputs) => {
    const data = {
      token: form.token,
      password: form.password,
      password_confirmation: form.password_confirmation,
    }

    try {
      await api.post('password/reset', data);
      Alert.alert('Senha redefinida!', 'A senha foi redefinida com sucess.');

      navigation.navigate('SingIn');
    } catch (error) {
      Alert.alert('Erro ao resetar senha.', 'Ocorreu um erro ao resetar sua senha. Tente novamente.')
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
              <Title>Redefinir a senha</Title>
            </View>
            <InputControl control={control} name='token' placeholder='Código.'
              error={errors.token && errors?.token?.message}
              autoCapitalize='none'
              autoCorrect={false}
              place
            />
            <InputControl control={control} name='password' placeholder='Digite seu senha.'
              error={errors.password && errors?.password?.message}
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry
            />
            <InputControl control={control} name='password_confirmation' placeholder='Confirme a senha.'
              error={errors.password_confirmation && errors?.password_confirmation?.message}
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry
            />
            <Buttom title="Redefinir" onPress={handleSubmit(handleResetPassword)} />
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
