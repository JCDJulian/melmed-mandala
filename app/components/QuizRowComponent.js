import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MKRadioButton } from 'react-native-material-kit'

class QuizRowComponent extends Component {
  constructor() {
    super();
    this.radioGroup = new MKRadioButton.Group();
  }

  render() {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.label}>
          {this.props.rowData}
        </Text>
        <View style={styles.row}>
          <View style={styles.col}>
            <MKRadioButton
              group={this.radioGroup}
            />
            <Text>1</Text>
          </View>
          <View style={styles.col}>
            <MKRadioButton
              group={this.radioGroup}
            />
            <Text>2</Text>
          </View>
          <View style={styles.col}>
            <MKRadioButton
              group={this.radioGroup}
            />
            <Text>3</Text>
          </View>
          <View style={styles.col}>
            <MKRadioButton
              group={this.radioGroup}
            />
            <Text>4</Text>
          </View>
          <View style={styles.col}>
            <MKRadioButton
              group={this.radioGroup}
            />
            <Text>5</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    padding: 20,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  label: {
    padding: 20,
    fontSize: 20
  },
  col: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 7, marginRight: 7,
    alignItems: 'center'
  },
});

export default QuizRowComponent
