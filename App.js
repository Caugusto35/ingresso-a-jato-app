import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import StackRoutes from './src/routes/stack.routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer style={{ flex: 1 }}>
      <StatusBar style='dark' translucent backgroundColor='transparent' />
      <StackRoutes />
    </NavigationContainer>
  );
}