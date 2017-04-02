import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Swiper from 'react-native-swiper';

export default class OnboardingTextScene extends Component {
  render() {
    const goToQuiz = () => Actions.onboardingQuiz({wedge: "Relationships"})
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        loop={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
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
    backgroundColor: '#9DD6EB',
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
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
