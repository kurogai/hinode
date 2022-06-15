import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Home } from './screens/Home';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown : false
      }}>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
<Stack.Navigator>
      <Stack.Screen name='Home' component={Home}/>
    </Stack.Navigator>
*/