import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



const Tab = createMaterialBottomTabNavigator();

const ButtonTab = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen}/>
    <Tab.Screen name="Movie" component={MovieScreen}/>
    </Tab.Navigator>
  )
}

export default ButtonTab
