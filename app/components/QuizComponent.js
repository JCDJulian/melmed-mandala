import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, ListView } from 'react-native'
import QuizRowComponent from './QuizRowComponent.js'
import QuizFooterComponent from './QuizFooterComponent.js'
import { WEDGE_QUESTIONS } from '../constants/Constants.js'
import { getNextPage } from '../constants/UtilityMethods.js'
import { Actions } from 'react-native-router-flux'

export default class QuizComponent extends Component {
  render() {

    console.log(this.props)
    console.log(WEDGE_QUESTIONS[this.props.wedge].questions)
    const questions = WEDGE_QUESTIONS[this.props.wedge].questions
    const questionsText = questions.map(function(object) {
      return object.text
    });

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(questionsText)
    }

    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <QuizRowComponent rowData={rowData} />}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
        />
        { this.props.showFooter ?
          <QuizFooterComponent onSubmit={
            () => Actions.rateWedge({wedge: this.props.wedge})
          }
          /> : null
        }
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#9DD6EB',
    flex: 1,
  },
  separator: {
   flex:1,
   height: StyleSheet.hairlineWidth,
   backgroundColor: '#8E8E8E'
 }
});
