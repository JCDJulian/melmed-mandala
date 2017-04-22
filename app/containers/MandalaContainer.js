import React from 'react'
import MandalaComponent from '../components/MandalaComponent'
import { connect } from 'react-redux'
import { selectWedge } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectWedge: (wedge) => {
      dispatch(selectWedge(wedge))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MandalaComponent)
