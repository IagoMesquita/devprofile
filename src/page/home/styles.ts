import styled from "styled-components/native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import {Feather} from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.dark};
`;
export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(17)}px;

  background-color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  align-self: center;
  flex-direction: row;
  padding-top: ${RFValue(40)}px;
`;
export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserAvatarButton = styled.TouchableOpacity``;
export const UserAvatar = styled.Image`
  width: ${RFValue(52)}px;
  height: ${RFValue(52)}px;
  border-radius: 10px;
`;
export const UseInforDetail = styled.View`
  margin-left: 17px;
`;
export const UserGreenting = styled.Text`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Icon = styled(Feather)`
  font-size:  ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.dark};
`
