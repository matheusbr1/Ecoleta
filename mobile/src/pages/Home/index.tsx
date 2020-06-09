import React from 'react'
import { View, ImageBackground, Image, StyleSheet, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// import dos ícones, todos os ícones ( Font-awesome, material, featherIcons ) estão disponíveis nesse pacote
import { Feather as Icon } from '@expo/vector-icons'

// import do botão-> Precisa instalar a lib 
import { RectButton } from 'react-native-gesture-handler'

const Home = () => {

  const navigation = useNavigation()

  function handleNavigateToPoints() {
    navigation.navigate('Points')
  }

  return (
    // O component ImageBackground é uma view que aceita imagem de background
    // Precisamos passar o source
    <ImageBackground
      source={require('../../assets/home-background.png')}
      style={styles.container}
      imageStyle={{ width: 274, height: 368 }}
    >

      <View style={styles.main}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.title} > Seu marketplace de coleta de resíduos. </Text>
        <Text style={styles.description} > Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente. </Text>
      </View>

      <View style={styles.footer} >
        <RectButton style={styles.button} onPress={handleNavigateToPoints} >
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="arrow-right" color="#fff" size={24} />
            </Text>
          </View>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>
      </View>

    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16
  }
});

export default Home