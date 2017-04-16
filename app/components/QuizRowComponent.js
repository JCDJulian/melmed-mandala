import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const QuizRowComponent = ({rowData}) => {
  return (
    <View style={styles.rowContainer}>
      <Text>
        {rowData}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  rowContainer: {
    padding: 20
  }
});

export default QuizRowComponent
