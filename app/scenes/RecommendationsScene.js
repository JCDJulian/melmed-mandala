import React, { Component } from 'react'
import RecommendationListContainer from '../containers/RecommendationListContainer'
import store from '../store/store'

export default class RecommendationsScene extends Component {
   render() {
    return (
      <RecommendationListContainer/>
    )
  }
}
