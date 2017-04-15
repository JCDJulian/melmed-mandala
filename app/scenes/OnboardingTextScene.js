import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Swiper from 'react-native-swiper';
import { WEDGES } from '../constants/Constants.js';

export default class OnboardingTextScene extends Component {
  render() {
    const goToQuiz = () => Actions.onboardingQuiz({wedge: WEDGES[0]})
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        loop={false}>
        
        <Image source = {require('../../images/OnboardBackground.jpg')} style = {styles.backgroundImage}>
            <View style = {styles.slide1}>
            <Text style={styles.textDisclaimer}>Disclaimer</Text>
            </View>
        </Image>
        
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
          <Button
            onPress={ goToQuiz }
            title="Get Started"
            accessibilityLabel="Get started with onboarding assessment."
          />
        </View>
      </Swiper>
    )
  }
}

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  textDisclaimer: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'justify',
    position: 'absolute',
    top: 550,
    left:120
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'justify',
    position: 'absolute',
    top: 200,
    left:120
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
    backgroundColor: 'rgba(0,0,0,0)',
    width: null,
    height: null,
  }
})
