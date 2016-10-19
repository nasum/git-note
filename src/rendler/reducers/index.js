import { combineReducers } from 'redux'
import MainReducer from './MainReducer'
import CodeReducer from './CodeReducer'

const rootReducer = combineReducers({
  MainReducer,
  CodeReducer,
})

export default rootReducer
