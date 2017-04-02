import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class MandalaScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MandalaScene</Text>
        <Button
          onPress={Actions.tabbar}
          title="Select wedge."
          accessibilityLabel="Select wedge."
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
