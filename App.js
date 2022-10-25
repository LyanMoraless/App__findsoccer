import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native';

import  { AuthProvider, AuthContext } from './src/contexts/Auth';

import Routes from './src/routers/routes';

export default function App() {
  return (

    <AuthProvider>
      <NavigationContainer>
        <Routes />
        <StatusBar style="auto" />
      </NavigationContainer>
    </AuthProvider>
  );
}
