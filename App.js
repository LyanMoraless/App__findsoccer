import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native';

import Routes from './src/routers/Routes';
import { QuadrasProvider } from './src/contexts/Quadras';

export default function App() {
  return (
    <QuadrasProvider>
      <NavigationContainer>
        <Routes />
        <StatusBar style="auto" />
      </NavigationContainer>
    </QuadrasProvider>
  );
}
