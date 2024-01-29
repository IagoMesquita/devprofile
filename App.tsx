import React from 'react';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import AppLoading from 'expo-app-loading'
import { Home } from './src/page/Home';
import SingIn from './src/page/SingIn';
import SingUp from './src/page/SingUp';
import { NavigationContainer } from '@react-navigation/native';




export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        {/* <Home /> */}
        {/* <SingIn/> */}
        <SingUp />
      </ThemeProvider>
    </NavigationContainer>
  );
}
