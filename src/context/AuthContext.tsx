import { createContext } from "react";
import { api } from "../services/api";
import { Alert } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

interface ICredentials {
  email: string;
  password: string;
}

interface IAuthContext {
  name: string;
  singIn: (credential: ICredentials) => void;
}

interface IProps {
  children: React.ReactNode
  // children: React.ReactElement
}
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const tokenData = "@DevProfile:token";
const userData = "@DevProfile:user";


export function AuthProvider({ children }: IProps) {
  const singIn = async ({ email, password }: ICredentials) => {
    try {
      const response = await api.post('sessions', {
        email,
        password
      });
      console.log('Response', response.data);
      const {token, user} = response.data;
      await AsyncStorage.setItem('tokenData', token);
      await AsyncStorage.setItem('userData', user);

    } catch (error) {
      // throw new Error(error as string);
      Alert.alert(
        'Erro na autenticação.',
        'Ocorreu um erro ao fazer login, verifique as credenciais.'
      )
    }
  }

  const values = {
    name: 'Iago',
    singIn,

  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )

}