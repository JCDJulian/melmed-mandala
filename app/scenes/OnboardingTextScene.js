import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Swiper from 'react-native-swiper';
import { WEDGES } from '../constants/Constants.js';

export default class OnboardingTextScene extends Component {
  render() {
    const goToQuiz = () => Actions.onboardingQuiz({
      wedge: WEDGES[0],
      title: WEDGES[0]
    })
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        loop={false}>
        
        <Image source = {require('../../images/OnboardBackground.jpg')} style = {styles.backgroundImage}>
            <View style = {styles.slide1}>
            <Text style={styles.text1}>Welcome, let's help you get started thinking about your wellbeing!</Text>
            <Text style={styles.textDisclaimer}>Disclaimer</Text>
            </View>
        </Image>
        
        <Image source = {require('../../images/mandala/onboarding1.jpg')} style = {styles.image}>
        <View style={styles.slide2}>
          <Text style={styles.text2}>The Mandala works by having you evaluate different areas of your life. You will then receive recommendations and set your priorities.</Text>
        </View>
        </Image>
        <View style={styles.slide3}>
          <Text style={styles.text3}>Let's start by answering some questions about you.</Text>
          <Button
            onPress={ goToQuiz }
            title="Get Started"
            accessibilityLabel="Get started with onboarding assessment."
            color="#841584"
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
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  textDisclaimer: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: 580,
  },
  text1: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: 60,
    
  },
  text2: {
    fontSize: 20,
    textAlign: 'center',
    position: 'absolute',
    top: 60,
    
  },
  text3: {
    fontSize: 20,
    textAlign: 'center',
    position: 'absolute',
    top: 260,
    
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
    backgroundColor: 'rgba(0,0,0,0)',
    width: null,
    height: null,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: null,
  }
})
