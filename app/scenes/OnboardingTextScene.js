import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Swiper from 'react-native-swiper';
import { WEDGES } from '../constants/Constants.js';

export default class OnboardingTextScene extends Component {
  render() {
    const goToQuiz = () => Actions.onboardingQuiz({
      wedge: WEDGES[0],
      title: WEDGES[0],
      hideNavBar: false
    })
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        loop={false}>

        <Image source = {require('../../images/OnboardBackground.jpg')} style = {styles.backgroundImage}>
            <View style = {styles.slide1}>
            <Text style={styles.text1}>Welcome, let's help you get started thinking about your wellbeing!</Text>
            <Text style={styles.textDisclaimer}>Disclaimer: This application does NOT provide medical advice or replace care provided by a clinician. If you are experiencing a medical or psychiatric emergency, contact 911 immediately.</Text>
            </View>
        </Image>

        <Image source = {require('../../images/mandala/onboarding1.jpg')} style = {styles.image}>
        <View style={styles.slide2}>
          <Text style={styles.text2}>The Mandala works by having you rate your satisfaction with different areas of your life. You can then set your priorities and receive recommendations.</Text>
        </View>
        </Image>
        <Image source = {require('../../images/mandala/mandala2.jpg')} style = {styles.image}>
        <View style={styles.slide3}>
          <Text style={styles.text2}>Let's start by answering some questions to get you thinking about your wellbeing. You can then rate yourself across ten areas of your life.</Text>
          <Button
            onPress={ goToQuiz }
            title="Get Started"
            accessibilityLabel="Get started with onboarding assessment."
            color={'#fff'}
            style={styles.buttonContainer}
            backgroundColor={"#BAD4AA"}
          />
        </View>
        </Image>
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
  },
  textDisclaimer: {
    color: '#fff',
    fontSize: 12,
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
  },
  buttonContainer: {
    position:'absolute',
    backgroundColor:"#BAD4AA",
    top: 400,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    color: "#fff",
    textAlign: 'center'
  },
 
})
