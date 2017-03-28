import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

import LaunchScene from '../scenes/LaunchScene';
import OnboardingTextScene from '../scenes/OnboardingTextScene';
import OnboardingQuizScene from '../scenes/OnboardingQuizScene';
import MandalaScene from '../scenes/MandalaScene';
import RecommendationsScene from '../scenes/RecommendationsScene';
import GraphScene from '../scenes/GraphScene';
import EditMetricScene from '../scenes/EditMetricScene';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="launch" component={LaunchScene} title="Launch" />
    <Scene key="onboardingText" component={OnboardingTextScene} title="Onboarding Text" />
    <Scene key="onboardingQuiz" component={OnboardingQuizScene} title="Onboarding Quix" />
    <Scene key="mandala" component={MandalaScene} title="Mandala" />

    {/* Mandala Detail Page */}

    <Scene key="tabbar" tabs={true}>
      <Scene key="tab1" title="Tab 1" icon={TabIcon}>
        <Scene key="recommendations" component={RecommendationsScene} title="Reccomendations" />
      </Scene>
      <Scene key="tab2" title="Tab 2" icon={TabIcon}>
        <Scene key="graph" component={GraphScene} title="Graph" />
      </Scene>
      <Scene key="tab3" title="Tab 3" icon={TabIcon}>
        <Scene key="editMetric" component={EditMetricScene} title="Edit Metric" />
      </Scene>
    </Scene>

  </Scene>
);

export default scenes
