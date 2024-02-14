import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SingIn from "../page/SingIn";
import SingUp from "../page/SingUp";
import ForgotPassword from "../page/ForgotPassword";

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SingIn"
    >
      <Stack.Screen name="SingIn" component={SingIn}/>
      <Stack.Screen name="SingUp" component={SingUp}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
    </Stack.Navigator>
  )
} 