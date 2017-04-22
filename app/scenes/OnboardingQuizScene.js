import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, ListView } from 'react-native'
import QuizRowComponent from '../components/QuizRowComponent.js'
import QuizComponent from '../components/QuizComponent.js'
import QuizFooterComponent from '../components/QuizFooterComponent.js'
import { getNextPage } from '../constants/UtilityMethods.js'

export default class OnboardingQuizScene extends Component {
  render() {

    return (
        <QuizComponent {...this.props} showFooter={true} />
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9DD6EB',
  },
  separator: {
   flex:1,
   height: StyleSheet.hairlineWidth,
   backgroundColor: '#8E8E8E'
 }
});
