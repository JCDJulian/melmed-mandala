import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Actions, Scene } from 'react-native-router-flux';

import LaunchScene from '../scenes/LaunchScene';
import OnboardingTextScene from '../scenes/OnboardingTextScene';
import OnboardingQuizScene from '../scenes/OnboardingQuizScene';
import RateWedgeScene from '../scenes/RateWedgeScene';
import MandalaScene from '../scenes/MandalaScene';
import RecommendationsScene from '../scenes/RecommendationsScene';
import RecommendationsDetails from '../scenes/RecommendationsDetails';
import GraphScene from '../scenes/GraphScene';
import EditMetricScene from '../scenes/EditMetricScene';

const TabIcon = ({ selected, title }) => {
return (
  <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
);
}

const style = StyleSheet.create({
    padForNavBar: {
      paddingTop: 64
    }
});

const scenes = Actions.create(
<Scene key="root">
  <Scene key="onboardingText" component={OnboardingTextScene} />
  <Scene key="onboardingQuiz" component={OnboardingQuizScene} sceneStyle={style.padForNavBar} />
  <Scene key="rateWedge" component={RateWedgeScene} />
  <Scene key="mandala" initial component={MandalaScene} sceneStyle={style.padForNavBar} title="Mandala" />

  {/* Mandala Detail Page */}

  <Scene key="tabbar" tabs={true}>
    <Scene key="tab1" title="Tab 1" icon={TabIcon}>
      <Scene key="recommendations" component={RecommendationsScene} sceneStyle={style.padForNavBar} title="Reccomendations" />
    </Scene>
    <Scene key="recommendationsdetails" title="Recommendation Details" component={RecommendationsDetails} sceneStyle={style.padForNavBar}/>
    <Scene key="tab2" title="Tab 2" icon={TabIcon}>
      <Scene key="graph" component={GraphScene} sceneStyle={style.padForNavBar} title="Graph" />
    </Scene>
    <Scene key="tab3" title="Tab 3" icon={TabIcon}>
      <Scene key="editMetric" component={EditMetricScene} sceneStyle={style.padForNavBar} />
    </Scene>
  </Scene>

  {/* Test scene. Can refactor into loading screen later. */}
  <Scene key="launch" component={LaunchScene} sceneStyle={style.padForNavBar} title="Launch" />

</Scene>
);

export default scenes
