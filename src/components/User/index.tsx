import { IUser } from "../../model/user";
import {
  Container, EmailData, EmailTitle, NameData, NameTitle, UserAvatar, UserDetail, UserEmailDetail, UserNameDetail
} from "./styles";

import avatarDefault from '../../assets/avatar02.png'
interface UserProps {
  data: IUser;
  onPress: () => void;
}

export function User({data, onPress }: UserProps) {
  return (
    <Container onPress={onPress}>
      <UserDetail>
        <UserNameDetail>
          <NameTitle>NOME</NameTitle>
          <NameData>{data.name}</NameData>
        </UserNameDetail>
        <UserEmailDetail>
          <EmailTitle>EMAIL</EmailTitle>
          <EmailData>{data.email}</EmailData>
        </UserEmailDetail>
      </UserDetail>
      <UserAvatar source={data.avatar_url ? {uri: data.avatar_url} : avatarDefault}/>
    </Container>
  );
}




