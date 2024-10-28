import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
   <Tabs screenOptions={{headerShown: false}}>
        <Tabs.Screen  name='index'/>
    <Tabs.Screen  name='explore'/>
    <Tabs.Screen  name='profile'/>

   </Tabs>
  )
}

export default _layout