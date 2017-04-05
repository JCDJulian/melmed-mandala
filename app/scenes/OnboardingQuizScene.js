import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { WEDGES } from '../constants/Constants.js'

export default class OnboardingQuizScene extends Component {

  getNextPage() {
    // If this is the last wedge, let nextPage go to mandala
    if (this.props.wedge === WEDGES[WEDGES.length-1]) {
      return () => Actions.mandala()
    } else {
      // Else get next wedge
      let nextWedge = WEDGES[WEDGES.indexOf(this.props.wedge) + 1]
      return () => Actions.onboardingQuiz({wedge: nextWedge})
    }
  }

  render() {
    const nextPage = this.getNextPage()

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
