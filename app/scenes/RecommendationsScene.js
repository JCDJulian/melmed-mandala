import React, { Component } from 'react'
import { View, Text, Image, ListView, StyleSheet, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { FAMILY_RECS } from '../constants/Constants.js'
import store from '../store/store'

export default class RecommendationsScene extends Component {
   render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(FAMILY_RECS)
    }

    console.log(store.getState())
    return (
    <View >
      <ListView
        dataSource={this.state.dataSource}
        renderHeader={(rowData) => <Image source = {require('../../images/components/family.jpeg')} style = {styles.containerImage}/>}
        renderRow={(rowData) =>
          <TouchableHighlight
            onPress={
              ()=>Actions.recommendationsdetails(
                {recommendation: rowData}
              )}>
            <Text style={styles.listItem}>{rowData.name}</Text>
          </TouchableHighlight>}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
      />
    </View>
    )
  }
}

var styles = StyleSheet.create({
  wrapper: {
  },
  listContainer: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
  },
  listItem: {
    fontSize: 20,
    textAlign: 'justify',
    padding: 10
  },
  containerImage: {
    width: 400,
    height:300,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  separator: {
    flex:1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
})
