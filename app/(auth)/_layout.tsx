import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

const AuthLayout = () => {
  return <Slot screenOptions={{headerShown: false}}/>
   
  
}

export default AuthLayout