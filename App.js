import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Home } from './screens/Home';
import { Launch } from './screens/Launch';
import { Downloads } from './screens/Downloads';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { Gallery } from './screens/Gallery';
import { Definitions } from './screens/Definitions';
import { MangaGallery } from './screens/MangaGallery';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown : false
      }}>
        <Stack.Screen name='Home' component={MangaGallery}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
<Stack.Navigator>
      <Stack.Screen name='Home' component={Home}/>
    </Stack.Navigator>
*/