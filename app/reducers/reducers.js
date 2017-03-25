import { combineReducers } from 'redux'
import { } from '../actions/actions'

function selectMandala(state = 'default', action) {
  return state
}

const rootReducer = combineReducers({
  selectMandala
})

export default rootReducer
