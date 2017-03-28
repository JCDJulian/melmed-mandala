import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class OnboardingQuizScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world</Text>
        <Button
          onPress={Actions.mandala}
          title="Submit Assessment"
          accessibilityLabel="Submit assessment and move to mandala."
        />
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
