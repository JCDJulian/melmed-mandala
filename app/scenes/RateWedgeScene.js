import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { getNextPage } from '../constants/UtilityMethods.js'
import RateWedgeInputComponent from '../components/RateWedgeInputComponent.js'

export default class RateWedgeScene extends Component {

  render() {
    const nextPage = getNextPage(this.props.wedge, true)

    return (
      <View style={styles.container}>
        <RateWedgeInputComponent {...this.props} onSubmit={nextPage}/>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DFF8EB',
  }
});
