import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, processColor
} from 'react-native';
import reactAddonsUpdate from 'react-addons-update';

import {LineChart} from 'react-native-charts-wrapper';

class GraphScene extends React.Component {

  constructor() {
    super();

    this.state = {
      data: {},
      legend: {
        enabled: false,
        textColor: processColor('#9DD6EB'),
        textSize: 12,
        position: 'BELOW_CHART_RIGHT',
        form: 'SQUARE',
        formSize: 14,
        xEntrySpace: 10,
        yEntrySpace: 5,
        formToTextSpace: 5,
        wordWrapEnabled: true,
        maxSizePercent: 0.5,
        custom: {
          colors: [processColor('red'), processColor('blue'), processColor('green')],
          labels: ['Family Life', 'Relationships', 'Spirituality', 'Finances', 'Organization', 'Medical', 'Work', 'Social Skills', 'Exercise', 'Diet']
        }
      },
      marker: {
        enabled: true,
        backgroundTint: processColor('teal'),
	      markerColor: processColor('#9DD6EB'),
        textColor: processColor('white'),

      }
    };
  }

  componentDidMount() {
    this.setState(
      reactAddonsUpdate(this.state, {
        data: {
          $set: {
            dataSets: [{
              values: [{y: 1}, {y: 2}, {y: 3}, {y: 4}, {y: 5}, {y: 6}, {y: 7}, {y: 8}, {y: 9}, {y: 10}],
              label: 'Family Life',
              config: {
                lineWidth: 1,
                drawCubicIntensity: 0.4,
                circleRadius: 5,
                drawHighlightIndicators: false,
                color: processColor('blue'),
                drawFilled: false,
                fillColor: processColor('blue'),
                fillAlpha: 45,
                circleColor: processColor('blue')
              }
            }],
          }
        },
        xAxis: {
          $set: {
            valueFormatter: ['Week1', 'Week2', 'Week3', 'Week4']
          }
        }
      })
    );
  }

  handleSelect(event) {
    let entry = event.nativeEvent
    if (entry == null) {
      this.setState({...this.state, selectedEntry: null})
    } else {
      this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>

        <View style={{height:100}}>
          <Text>Family Life</Text>
          <Text> {this.state.selectedEntry}</Text>
        </View>

        <View style={styles.container}>
          <LineChart
            style={styles.chart}
            data={this.state.data}
            description={{text: ''}}
            legend={this.state.legend}
            marker={this.state.marker}
            xAxis={this.state.xAxis}
            drawGridBackground={false}
            borderColor={processColor('teal')}
            borderWidth={0}
            drawBorders={true}

            touchEnabled={true}
            dragEnabled={true}
            scaleEnabled={true}
            scaleXEnabled={true}
            scaleYEnabled={true}
            pinchZoom={true}
            doubleTapToZoomEnabled={true}

            dragDecelerationEnabled={true}
            dragDecelerationFrictionCoef={0.99}

            keepPositionOnRotation={false}
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
    backgroundColor: '#DFF8EB',
    marginBottom:50
  },
  chart: {
    flex: 1
  }
});

export default GraphScene;