import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, TouchableOpacity } from 'react-native';

import Lottie from 'lottie-react-native';

import soccer from '../../assets/soccer.json';

import fonts from '../../global/styles/fonts';


export default function Welcome() {
 return (
  <SafeAreaView style={styles.container}>

    <View style={styles.textContainer}>
      <Text style={styles.title}>Bem-Vindo</Text>
      <Text style={styles.titleTwo}>Prossiga para ter acesso as informações da sua equipe {'\n'}ou liga favorita</Text>
    </View>

    <View style={styles.image}>
      <Lottie resizeMode="contain" source={soccer} autoPlay loop/>
    </View>

    <View style={styles.buttonView}>
      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </View>

  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#fefefe',
  },
  textContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center', 
    alignItems: 'center',
    marginHorizontal: 20,
  },
  title: {
    marginTop: 35,
    fontSize: 30,
    color: 'black',
    fontFamily: fonts.fonts.bold,
  },
  titleTwo: {
    marginTop: 15,
    fontSize: 18,
    color: 'black',
    fontFamily: fonts.fonts.regular,
  },
  image: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#90EE90',
    borderRadius: 15,
    marginHorizontal: 25,
    width: '50%',
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: fonts.fonts.bold,
  }
})