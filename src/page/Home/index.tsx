import { 
  Container,
  Header, 
  Icon, 
  UseInforDetail, 
  UserAvatar, 
  UserAvatarButton, 
  UserGreenting, 
  UserInfo,
  UserName,
  UserWrapper 
} from './styles';
import avatarDefault from '../../assets/avatar02.png'

export function Home() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton onPress={()=> null}>
              <UserAvatar source={avatarDefault}/>
            </UserAvatarButton>
            <UseInforDetail>
              <UserGreenting>Olá,</UserGreenting>
              <UserName>Iago</UserName>
            </UseInforDetail>
          </UserInfo>
          <Icon name='power'/>
        </UserWrapper>
      </Header>
    </Container>
  )
}
