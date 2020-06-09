import React from 'react';
import { StyleSheet, StatusBar } from 'react-native'
import { useFonts, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu'
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { AppLoading } from 'expo'

import Routes from './src/routes'
// import Home from './src/pages/Home'

export default function App() {

  // Precisamos instalar os pacotes, importar as fontes e o useFonts
  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Roboto_400Regular,
    Roboto_500Medium
  })

  // Enquanto as fonts não estiverem carregadas, vai ser exibido a SplashScreen
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
      {/* <Home /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
