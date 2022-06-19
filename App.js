import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Home } from './screens/Home';
import { Launch } from './screens/Launch';
import { Downloads } from './screens/Downloads';
import { Gallery } from './screens/Gallery';
import { Definitions } from './screens/Definitions';
import { MangaGallery } from './screens/MangaGallery';
import { ViewToDownload } from './screens/ViewToDownload';
import { MangaImages } from './screens/MangaImages';
import { ViewImage } from './screens/ViewImage';
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
        <Stack.Screen name='Launch' component={Launch}/>
        <Stack.Screen name='Downloads' component={Downloads}/>
        <Stack.Screen name='Gallery' component={Gallery}/>
        <Stack.Screen name='Definitions' component={Definitions}/>
        <Stack.Screen name='MangaGallery' component={MangaGallery}/>
        <Stack.Screen name='ViewToDownload' component={ViewToDownload}/>
        <Stack.Screen name='MangaImages' component={MangaImages}/>
        <Stack.Screen name='ViewImage' component={ViewImage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}