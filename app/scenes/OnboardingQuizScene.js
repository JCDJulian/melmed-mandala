import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, ListView } from 'react-native'
import QuizRowComponent from '../components/QuizRowComponent.js'
import { getNextPage } from '../constants/UtilityMethods.js'
import { Actions } from 'react-native-router-flux'

export default class OnboardingQuizScene extends Component {

  render() {
    console.log(QuizRowComponent)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    }

    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <QuizRowComponent rowData={rowData} />}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
        />

        <View style={styles.footer}>
          <Button
            onPress={() => Actions.rateWedge({wedge: this.props.wedge})}
            title="Submit Assessment"
            accessibilityLabel="Submit assessment and move to mandala."
          />
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9DD6EB',
  },
  footer: {
    backgroundColor:'#EFEFF2',
    padding: 10
  },
  separator: {
   flex:1,
   height: StyleSheet.hairlineWidth,
   backgroundColor: '#8E8E8E'
 }
});
