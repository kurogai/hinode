import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity,Image, StyleSheet } from 'react-native';
import { StatusBar } from "expo-status-bar";
import BottomSheet from '@gorhom/bottom-sheet';


// Screens
import { Download } from '../screens/download.screen';
import { Search } from '../screens/search.screen';
import { Explore } from '../screens/explore.screen';
import  Home  from "../screens/home.screen";

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    display: 'flex',
    borderTopColor:"transparent",
    backgroundColor: '#ffffff',
    height: 65,
    justifyContent:"center",
    alignItems:"center",
  },
};

const tabScreenOptions = (routeName, iconSource) => ({
  tabBarIcon: ({ focused }) => (
    <View style={styles.tabIconContainer}>
    <StatusBar backgroundColor="#ffffff"/>
      <Image
        source={iconSource}
        style={styles.tabIcon}
      />
      <Text style={{fontFamily:"Poppins-Medium",fontSize:12,color:"#070707"}}>{routeName}</Text>
    </View>
  ),
});


const HomeRoutes = () => {
 
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={tabBarOptions}>
      <Tab.Screen name='Home' component={Home} options={tabScreenOptions('Home', require('../../assets/icones/home.png'))} />
      <Tab.Screen name='Explore' component={Explore} options={tabScreenOptions('Explore', require('../../assets/icones/location.png'))} />
      <Tab.Screen name='Search' component={Search} options={tabScreenOptions('Search', require('../../assets/icones/pes.png'))} />
      <Tab.Screen name='Download' component={Download} options={tabScreenOptions('Download', require('../../assets/icones/download.png'))} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: 35,
    height: 35,
    aspectRatio: 1,
  },
});

export default HomeRoutes;
