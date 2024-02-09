import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export  function useAuth() {
  const {name, singIn} = useContext(AuthContext)
  
  return {
    name,
    singIn
  }
}