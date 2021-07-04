import React, { ReactChild } from 'react';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';
import { Text } from 'react-native';

type props = {
  children: ReactChild
}

export default function UseCustomFont({ children }: props) {
  const [loaded] = useFonts({ 
    "gilroy-bold": require('../../assets/fonts/gilroy-bold.ttf'),
    "gilroy-heavy": require('../../assets/fonts/gilroy-heavy.ttf'),
    "gilroy-medium": require('../../assets/fonts/gilroy-medium.ttf'),
    "gilroy-regular": require('../../assets/fonts/gilroy-regular.ttf'),
    "gilroy-semibold": require('../../assets/fonts/gilroy-semibold.ttf'),
   })

   if (!loaded) return <AppLoading />
   return <>{children}</>
}