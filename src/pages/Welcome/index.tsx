import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, TouchableOpacity } from 'react-native';

import Lottie from 'lottie-react-native';

import soccer from '../../assets/soccer.json';

export default function Welcome() {
 return (
  <SafeAreaView style={styles.container}>

    <View style={styles.textContainer}>
      <Text style={styles.title}>Bem-vindo(a)</Text>
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
    backgroundColor: 'black',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    marginHorizontal: 25,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#FFF',
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
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginHorizontal: 25,
    width: '50%',
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  }
})