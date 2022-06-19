import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { _Index } from './screens/Index';
import { MangaGallery } from './screens/MangaGallery';
import { ViewToDownload } from './screens/ViewToDownload';
import { MangaImages } from './screens/MangaImages';
import { ViewImage } from './screens/ViewImage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown : false
      }}>
        <Stack.Screen name='Home' component={_Index}/>
        <Stack.Screen name='MangaGallery' component={MangaGallery}/>
        <Stack.Screen name='ViewToDownload' component={ViewToDownload}/>
        <Stack.Screen name='MangaImages' component={MangaImages}/>
        <Stack.Screen name='ViewImage' component={ViewImage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}