import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {CounterProvider} from './hooks/useCounter';
import theme from './global/styles/theme';
import {Routes} from './routes';
import {StatusBar} from 'react-native';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CounterProvider>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <Routes />
        </NavigationContainer>
      </CounterProvider>
    </ThemeProvider>
  );
}
