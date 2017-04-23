import React from 'react'
import EditMetricComponent from '../components/EditMetricComponent'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    wedge:state.selectedWedge
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMetricComponent)
