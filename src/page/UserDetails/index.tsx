import { useRoute } from "@react-navigation/native"
import { Text } from "react-native"
import { Container } from "./styles"

export  function UserDetails() {
  const route = useRoute()
  console.log(route)
  return (
    <Container>
      <Text>Usuário Details</Text>
    </Container>
  )
} 