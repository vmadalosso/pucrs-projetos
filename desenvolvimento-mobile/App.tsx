import React from 'react'
import { StatusBar } from 'react-native'
import {
  useFonts,
  // eslint-disable-next-line camelcase
  Inter_400Regular,
  // eslint-disable-next-line camelcase
  Inter_700Bold,
} from '@expo-google-fonts/inter'

import { Loading } from '@/components/Loading'
import { Navigation } from '@/navigation/Navigation'

import '@/styles/global.css'

export default function App() {
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line camelcase
    Inter_400Regular,
    // eslint-disable-next-line camelcase
    Inter_700Bold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <Navigation />
    </>
  )
}
