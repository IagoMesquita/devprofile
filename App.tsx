import React from 'react';
import { Home } from './src/page/home';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
