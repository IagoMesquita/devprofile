import { createContext } from "react";

interface IAuthContext {
  name: string;
  email: string;
  password: string;
}

export const AuthoContext = createContext<IAuthContext>({} as IAuthContext);