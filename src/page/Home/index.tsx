import {
  Container,
  Header,
  Icon,
  LogoutButton,
  UseInforDetail,
  UserAvatar,
  UserAvatarButton,
  UserGreenting,
  UserInfo,
  UserName,
  UserWrapper
} from './styles';
import avatarDefault from '../../assets/avatar02.png'
import { useAuth } from '../../Hooks/useAuth';

export function Home() {
  const {user, singOut} = useAuth();
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton onPress={() => null}>
              <UserAvatar source={
                user.avatar_url ? { uri: user.avatar_url } : avatarDefault
              }
              />
            </UserAvatarButton>
            <UseInforDetail>
              <UserGreenting>Olá,</UserGreenting>
              <UserName>{user.name}</UserName>
            </UseInforDetail>
          </UserInfo>
          <LogoutButton onPress={singOut}>
            <Icon name='power' />
          </LogoutButton>
        </UserWrapper>
      </Header>
    </Container>
  )
}
