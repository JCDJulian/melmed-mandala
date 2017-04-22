import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import EditMetricContainer from '../containers/EditMetricContainer'

export default class EditMetricScene extends Component {
  render() {
    return (
      <EditMetricContainer/>
    )
  }
}
