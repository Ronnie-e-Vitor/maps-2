import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Rotas from './componentes/rotas';


export default function App() {
  return (
  <NavigationContainer>
      
        <Rotas/>

    </NavigationContainer>
  
  );
}


