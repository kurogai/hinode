import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { _Index } from './screens/Index';
import { MangaGallery } from './screens/MangaGallery';
import { ViewToDownload } from './screens/ViewToDownload';
import { MangaImages } from './screens/MangaImages';
import { ViewImage } from './screens/ViewImage';

import store from './redux/store/store';
import { Provider } from 'react-redux';
import { Alert, PermissionsAndroid, Platform } from "react-native";

import * as MediaLibrary from "expo-media-library";
import * as Permissions from "expo-permissions";

const Stack = createStackNavigator();

export default function App(props) {
  const checkPermission = async()=>{
    // add to iOS, next releases (maybe?)
    if(Platform.OS === "android"){
      try{
        // read external storage
        const already = await PermissionsAndroid.check("android.permission.READ_EXTERNAL_STORAGE");
        if(!already.valueOf()){
          const granted = await PermissionsAndroid.request('android.permission.READ_EXTERNAL_STORAGE',{
            title : "Hinode precisa de permissões de armazenamento",
            message : "Hinode irá usar seu dispositivo para armazenar e ler a biblioteca de mangás, porfavor dê permissão"
          });
  
          if(granted == PermissionsAndroid.RESULTS.GRANTED){
            console.log("Permissões dadas");
  
            const already = await MediaLibrary.getPermissionsAsync();
            if(!already.granted){
              const permission = await MediaLibrary.requestPermissionsAsync();
              if(permission.granted){
                console.log("Media Library com permissoes");
              }
            }
  
          }else{
            Alert.alert("O Hinode não pode ser executado sem as permissões de armazenamento")
          }
        }
        // read camera permission
        const alreadyGallery = await PermissionsAndroid.check("android.permission.CAMERA");
        if(!alreadyGallery.valueOf()){
          const granted = await PermissionsAndroid.request('android.permission.CAMERA',{
            title : "Hinode precisa de permissões de camera e galeria",
            message : "Hinode irá acessar a galeria do seu dispositivo, dê as permissões necessárias"
          });
  
          if(granted == PermissionsAndroid.RESULTS.GRANTED){
            console.log("Permissões dadas");
  
            const alreadyGallery = await MediaLibrary.getPermissionsAsync();
            if(!alreadyGallery.granted){
              const permission = await MediaLibrary.requestPermissionsAsync();
              if(permission.granted){
                console.log("Media Library com permissoes");
              }
            }
  
          }else{
            Alert.alert("O Hinode não pode ser executado sem as permissões de armazenamento")
          }
        }
        // read external storage
        const checkCamera = await MediaLibrary.getPermissionsAsync();
        if(!checkCamera){
          let done = await MediaLibrary.requestPermissionsAsync();
          if(done){
            console.log("Okay");
          }else{
            console.log("Impossivel continuar sem permissões")
          }
        }
      }catch{
        
      }
    }
  }

  checkPermission();

  return (
    <Provider store={store}>
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
    </Provider>
  );
}