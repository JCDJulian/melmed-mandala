import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, ListView } from 'react-native'
import QuizRowComponent from './QuizRowComponent.js'
import RateWedgeInputComponent from './RateWedgeInputComponent.js'
import QuizComponent from './QuizComponent.js'
import { getNextPage } from '../constants/UtilityMethods.js'
import { Actions } from 'react-native-router-flux'

export default class EditMetricComponent extends Component {

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([
        'Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5', 'Question 6', 'Question 7', 'Question 8'
      ])
    }

    return (
      <View style={styles.container}>
        <RateWedgeInputComponent onSubmit={()=>console.log("Hello world")}/>
        <QuizComponent {...this.props} showFooter={false} />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:50
  },
  separator: {
   flex:1,
   height: StyleSheet.hairlineWidth,
   backgroundColor: '#8E8E8E'
 }
});
