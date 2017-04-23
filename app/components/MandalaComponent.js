import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor,
  Button
} from 'react-native';
import { PieChart } from 'react-native-charts-wrapper';
import { Actions } from 'react-native-router-flux';
import { COLORS } from '../constants/Colors'

import store from '../store/store'

class MandalaComponent extends React.Component {

  constructor() {
    super();
    let gradient = COLORS["gradient"];
    this.state = {
      legend: {
        enabled: false,
        textSize: 8,
        form: 'CIRCLE',
        position: 'RIGHT_OF_CHART',
        wordWrapEnabled: true
      },
      data: {
        dataSets: [{
          values: [{value: 20, label: 'Family Life'},
          {value: 20, label: 'Relationships'},
          {value: 20, label: 'Spirituality'},
          {value: 20, label: 'Finances'},
          {value: 20, label: 'Organization'},
          {value: 20, label: 'Medical'},
          {value: 20, label: 'Work'},
          {value: 20, label: 'Social Skills'},
          {value: 20, label: 'Exercise'},
          {value: 20, label: 'Diet'},
        ],
          label: 'Mandala',
          config: {
            drawValues: false,
            colors:
            [
              processColor(gradient["1"]),
              processColor(gradient["3"]),
              processColor(gradient["7"]),
              processColor(gradient["10"]),
              processColor(gradient["9"]),
              processColor(gradient["1"]),
              processColor(gradient["9"]),
              processColor(gradient["10"]),
              processColor(gradient["6"]),
              processColor(gradient["8"])
            ],
            sliceSpace: 5,
            selectionShift: 13
          }
        }],
      },
      description: {
        text: 'Test',
        textSize: 15,
        textColor: processColor('darkgray'),
      }
    };
  }

  handleSelect(event) {
    let entry = event.nativeEvent
    if (entry == null) {
      this.props.selectWedge(null);
    } else {
      this.props.selectWedge(entry.label);
      Actions.tabbar()
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <PieChart
            style={styles.chart}
            logEnabled={true}
            chartBackgroundColor={processColor('#9DD6EB')}
            description={this.state.description}
            data={this.state.data}
            legend={this.state.legend}

            drawSliceText={true}
            usePercentValues={true}
            holeRadius={5}
            holeColor={processColor('#f0f0f0')}
            transparentCircleRadius={20}
            transparentCircleColor={processColor('#f0f0f088')}

            entryLabelColor={processColor('black')}
            entryLabelTextSize={1}

            onSelect={this.handleSelect.bind(this)}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chart: {
    flex: 1
  }
});

export default MandalaComponent;
