import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { Alert } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUser } from "../model/user";

interface IAuthState {
  token: string;
  user: IUser;
}

interface ICredentials {
  email: string;
  password: string;
}

export interface IAuthContext {
  user: IUser;
  singIn: (credential: ICredentials) => void;
  singOut: () => void;
}

interface IProps {
  children: React.ReactNode
  // children: React.ReactElement
}
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const tokenData = "@DevProfile:token";
const userData = "@DevProfile:user";


export function AuthProvider({ children }: IProps) {

  const [data, setData] = useState<IAuthState>({} as IAuthState);

  useEffect(() => {
    async function loadAuthData() {
      const token = await AsyncStorage.getItem(tokenData);
      const user = await AsyncStorage.getItem(JSON.stringify(userData));

      if (token && user) {
        setData({token, user: JSON.parse(user)});
      }
    }

    loadAuthData();
  }, [])

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

      setData({token, user});
    } catch (error) {
      // throw new Error(error as string);
      Alert.alert(
        'Erro na autenticação.',
        'Ocorreu um erro ao fazer login, verifique as credenciais.'
      )
    }
  }

  const singOut = async () => {
    await AsyncStorage.removeItem(tokenData);
    await AsyncStorage.removeItem(userData);

    setData({} as IAuthState)
  } 

  const values = {
    user: data.user,
    singIn,
    singOut

  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )

}