import React, { useEffect,useCallback } from 'react';
import "expo-dev-client";

// Função para verificar as permissões
import checkPermission from "./src/hooks/usePermission";

import { View } from "react-native"
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import Route from "./src/routes"


SplashScreen.preventAutoHideAsync();


export default function App() {


  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Mukta-Bold": require("./assets/fonts/Mukta-Bold.ttf"),
    "Mukta-Regular": require("./assets/fonts/Mukta-Regular.ttf"),
    "Mukta-SemiBold": require("./assets/fonts/Mukta-SemiBold.ttf"),
    "Mukta-Medium": require("./assets/fonts/Mukta-Medium.ttf"),
    "Nunito-Bold": require("./assets/fonts/NunitoSansBold.ttf"),
    "Nunito-Black": require("./assets/fonts/NunitoSansBlack.ttf"),
    "Nunito-Medium": require("./assets/fonts/NunitoSansMedium.ttf"),
    "Nunito-Regular": require("./assets/fonts/NunitoSansRegular.ttf"),
  });
 
  useEffect(() => {
    // Verificar as permissões quando o componente é montado
    checkPermission();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <View onLayout={onLayoutRootView} style={{flex:1}}><Route /></View>
}
