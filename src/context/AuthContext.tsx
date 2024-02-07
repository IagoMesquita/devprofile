import { createContext } from "react";

interface IAuthContext {
  name: string;
}

interface IProps {
  children: React.ReactNode
  // children: React.ReactElement
}
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);


const values = {
  name: 'Iago',

}

export function AuthProvider({ children }: IProps) {
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )

}