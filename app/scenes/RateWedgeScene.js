import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { getNextPage } from '../constants/UtilityMethods.js'

export default class RateWedgeScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onChanged(text) {
    let newText = '';
    let numbers = '0123456789';

    if (text.length === 1) {
      if(numbers.indexOf(text[0]) > -1) {
           newText = text[0];
      }
    }

    if (text.length === 2) {
      if(text[0] === '1') {
        newText += '1'
        if(text[1] === '0') {
             newText += text[1];
        }
      } else {
        if(numbers.indexOf(text[1] > -1)) {
             newText = text[0];
        }
      }
    }
    this.setState({text: newText});
  }

  render() {
    const nextPage = getNextPage(this.props.wedge, true)

    return (
      <View style={styles.container}>
        <Text
          style = {styles.header}
          >Rating {this.props.wedge}
        </Text>
        <Text style = {styles.instructionText}>
          Please provide a rating between 1 and 10 for this wedge.
        </Text>
        <TextInput
          style = {styles.textInput}
          editable = {true}
          maxLength = {2}
          onChangeText={(text) => this.onChanged(text)}
          keyboardType={'number-pad'}
          value={this.state.text}
        />
        <Button
          onPress={nextPage}
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
  },
  header: {
    fontSize: 30,
    padding: 5
  },
  instructionText: {
    fontSize: 12
  },
  textInput: {
    backgroundColor: '#ededed',
    height: 60,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 140,
    marginRight: 140,
    fontSize: 20,
    textAlign: "center"
  }
});
