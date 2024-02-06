import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Input } from "../../components/Forms/Input";
import { BackToSingIn, BackToSingInTitle, Container, Content, Icon, Logo, Title } from "./styles";
import { Buttom } from "../../components/Forms/Buttom";
import logo from '../../assets/logo.png';
import { InputControl } from "../../components/Forms/InputControl";

import { useNavigation } from '@react-navigation/native';
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

interface ScreenNavigationProps {
  goBack: () => void;
}

interface IFormInputs {
  [name: string]: any;
}

const schemaSingUp = yup.object({
  name: yup.string().required('Nome é um campo obrigatório'),
  email: yup.string().email('Email inválido').required('Email é um campo obrigatório'),
  password: yup.string().required('Senha é um campo obrigatório'),
})


export default function SingUp() {
  const navigation = useNavigation<ScreenNavigationProps>()

  const { control, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    resolver: yupResolver(schemaSingUp),
    defaultValues: {
      email: "",
      name: "",
      password: ""
    }
  })


  const handleSingUp = (form: IFormInputs) => {
    const data = {
      name: form.name,
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
              <Title>Crie sua conta</Title>
            </View>
            <InputControl control={control} name='name' placeholder='Digite seu nome'
              error={errors.name && errors?.name?.message}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
            />
            <InputControl control={control} name='email' placeholder='Digite seu email'
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
            <Buttom title="Criar conta"  onPress={handleSubmit(handleSingUp)}/>
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
