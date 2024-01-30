import { ScrollView } from 'react-native';
import { Input } from '../../components/Forms/Input';
import { Container, Content, Logo, Title } from './styles';
import { Buttom } from '../../components/Forms/Buttom';
import logo from '../../assets/logo.png';

export default function SingIn() {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Content>
        <Logo source={logo}/>
          <Title>Faça seu login</Title>
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Buttom title="Entrar"/>
        </Content>
      </Container>
    </ScrollView>
  )
}