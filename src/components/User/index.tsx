import {
  Container, EmailData, EmailTitle, NameData, NameTitle, UserAvatar, UserDetail, UserEmailDetail, UserNameDetail
} from "./styles";

export function User() {
  return (
    <Container>
      <UserDetail>
        <UserNameDetail>
          <NameTitle>NOME</NameTitle>
          <NameData>Iago Developer</NameData>
        </UserNameDetail>
        <UserEmailDetail>
          <EmailTitle>EMAIL</EmailTitle>
          <EmailData>iago@text.com</EmailData>
        </UserEmailDetail>
      </UserDetail>
      <UserAvatar />
    </Container>
  );
}




