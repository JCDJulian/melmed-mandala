import React from 'react'
import RecommendationListComponent from '../components/RecommendationListComponent'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    selectedWedge: state.selectedWedge
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendationListComponent)
