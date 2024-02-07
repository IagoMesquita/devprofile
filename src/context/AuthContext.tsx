import { createContext } from "react";

interface IAuthContext {
  name: string;
  singIn: () => void;
}

interface IProps {
  children: React.ReactNode
  // children: React.ReactElement
}
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);




export function AuthProvider({ children }: IProps) {
  const singIn = () => {
    console.log('Logarr!')
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