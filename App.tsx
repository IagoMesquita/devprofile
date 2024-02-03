import React from 'react';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';




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
        <Routes/>
      </ThemeProvider>
    </NavigationContainer>
  );
}
