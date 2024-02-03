import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Input } from "../../components/Forms/Input";
import { BackToSingIn, BackToSingInTitle, Container, Content, Icon, Logo, Title } from "./styles";
import { Buttom } from "../../components/Forms/Buttom";
import logo from '../../assets/logo.png';

import { useNavigation } from '@react-navigation/native';
import { FieldValues, useForm } from "react-hook-form";
import { InputControl } from "../../components/Forms/InputControl";

interface ScreenNavigationProps {
  goBack: () => void;
}

interface IFormInputs {
  [name: string]: any;
}


export default function SingUp() {
  const navigation = useNavigation<ScreenNavigationProps>()

  const { control, handleSubmit, formState: { errors } } = useForm<FieldValues>({
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
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
            />
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
