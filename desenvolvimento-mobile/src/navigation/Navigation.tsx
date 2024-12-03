import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen } from '@/screens/HomeScreen'
import { AlbumsScreen } from '@/screens/AlbumsScreen'
import { PhotosScreen } from '@/screens/PhotosScreen'
import { PhotoDetailScreen } from '@/screens/PhotoDetailScreen'

const Stack = createStackNavigator()

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Albums" component={AlbumsScreen} />
        <Stack.Screen name="Photos" component={PhotosScreen} />
        <Stack.Screen name="PhotoDetail" component={PhotoDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
