import { IAuthContext } from './../context/AuthContext';
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export  function useAuth(): IAuthContext {
  const context = useContext(AuthContext)

  if(!context) {
    throw new Error('useAuth deve ser usado em um AuthProvider')
  }
  const {user, singIn} = useContext(AuthContext)
  
  return {
    user,
    singIn
  }
} 