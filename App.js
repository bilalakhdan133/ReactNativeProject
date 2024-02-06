import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import DetailScreen from './src/screens/DetailScreen';
import HomeScreen from './src/screens/homeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
  return (
   <NavigationContainer>
      <Stack.Navgator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navgator>
   </NavigationContainer>
  );
}

export default App;
