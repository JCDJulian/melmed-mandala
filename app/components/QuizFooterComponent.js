import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class QuizFooterComponent extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <Button
          onPress={this.props.onSubmit}
          title="Submit Assessment"
          accessibilityLabel="Submit assessment and move to mandala."
        />
        <Button
          onPress={Actions.mandala}
          title="Skip to Mandala"
          accessibilityLabel="Skip assessment and move to mandala."
        />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  footer: {
    backgroundColor:'#EFEFF2',
    padding: 10
  },
});
