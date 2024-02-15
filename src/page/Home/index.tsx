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
import { Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { IUser } from '../../model/user';
import { api } from '../../services/api';

export function Home() {
  const [users, setUsers] = useState<IUser[]>([]);
  const {user, singOut} = useAuth();

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('users');
      console.log("RESPONSE", response.data);

      setUsers([...response.data]);
      console.log("USER", users)
    }

    loadUsers();
  }, [])


  const handleSingOut = () => {
    Alert.alert('Tem certeza?', 'Deseja realmente sair?', [
      {
        text: 'Cancelar',
        onPress: () => {}
      },
      {
        text: 'Sair',
        onPress: () => singOut()
      }
    ])
  };

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
          <LogoutButton onPress={handleSingOut}>
            <Icon name='power' />
          </LogoutButton>
        </UserWrapper>
      </Header>
    </Container>
  )
}
