import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import './globals.css'

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'quicksand-bold': require('../assets/fonts/Quicksand-Bold.ttf'),
    'quicksand-semiBold': require('../assets/fonts/Quicksand-SemiBold.ttf'),
    'quicksand-regular': require('../assets/fonts/Quicksand-Regular.ttf'),
    'quicksand-light': require('../assets/fonts/Quicksand-Light.ttf'),
    'quicksand-medium': require('../assets/fonts/Quicksand-Medium.ttf'),
  })

  useEffect(() => {
    if (error) throw error

    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded, error])

  return <Stack screenOptions={{ headerShown: false }} />
}
