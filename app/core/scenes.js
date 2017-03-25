import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import LaunchScene from '../scenes/LaunchScene';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="launch" component={LaunchScene} title="Launch" />
  </Scene>
);

export default scenes
