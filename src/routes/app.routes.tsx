import { Home } from "../page/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  )
} 