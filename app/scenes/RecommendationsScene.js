import React, { Component } from 'react'
import { View, Text, Image, ListView, StyleSheet, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class RecommendationsScene extends Component {
   render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    }
    return (
    <View >
      <ListView 
        dataSource={this.state.dataSource}
        renderHeader={(rowData) => <Image source = {require('../../images/components/family.jpeg')} style = {styles.containerImage}/>}
        renderRow={(rowData) => <Text style={styles.listItem}>{rowData}</Text>}
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
    flexDirection: 'row',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  listItem: {
    fontSize: 20,
    textAlign: 'justify',
  },
  containerImage: {
    width: 400,
    height:300,
    backgroundColor: 'rgba(0,0,0,0)'
  }
})
