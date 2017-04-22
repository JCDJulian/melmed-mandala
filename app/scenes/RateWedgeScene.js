import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { getNextPage } from '../constants/UtilityMethods.js'
import RateWedgeInputComponent from '../components/RateWedgeInputComponent.js'

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
    backgroundColor: '#9DD6EB',
  }
});
