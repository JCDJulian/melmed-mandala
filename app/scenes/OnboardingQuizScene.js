import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { getNextPage } from '../constants/UtilityMethods.js'

export default class OnboardingQuizScene extends Component {

  render() {
    const nextPage = getNextPage(this.props.wedge)

    return (
      <View style={styles.container}>
        <Text>Hello world</Text>
        <Button
          onPress={nextPage}
          title="Submit Assessment"
          accessibilityLabel="Submit assessment and move to mandala."
        />
        <Text>{this.props.wedge}</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  }
});
