import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import LaunchContainer from '../containers/LaunchContainer'

export default class LaunchScene extends Component {
  render() {
    return (
      <LaunchContainer/>
    )
  }
}
