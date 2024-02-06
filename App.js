import React from 'react';
import DetailsScreen from './src/screen/DetailsScreen';
import HomeScreen from './src/screen/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
   <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" > 
        <Stack.Screen name="Home" component={HomeScreen} options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "#48a39e",
            },
            headerTintColor: "#ECF4D6",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "#48a39e",
            },
            headerTintColor: "#ECF4D6",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}/>
      </Stack.Navigator>
   </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#48a39e'
  },
});

export default App;