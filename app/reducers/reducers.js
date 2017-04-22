import { combineReducers } from 'redux'
import { SELECT_WEDGE } from '../actions/actions'

function selectedWedge(state = 'default', action) {
  switch (action.type) {
    case SELECT_WEDGE:
      return action.wedge
    default:
      return state
  }
}

const rootReducer = combineReducers({
  selectedWedge
})

export default rootReducer
