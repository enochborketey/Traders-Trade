import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

const Layout = () => {
  return (
    <Tabs screenOptions={{headerShown: false, tabBarActiveTintColor: 'red'}}>
        <Tabs.Screen name='index' options={{tabBarIcon: ({color, size}) =><Entypo name="home" size={size} color={color} /> }} />
        <Tabs.Screen name='wallet' options={{tabBarIcon: ({color, size}) => <Entypo name="wallet" size={size} color={color} />}} />
        <Tabs.Screen name='profile' options={{tabBarIcon:({color, size}) => <AntDesign name="user" size={size} color={color} />}} />

    </Tabs>
  )
}

export default Layout