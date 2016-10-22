import { combineReducers } from 'redux'
import MainReducer from './MainReducer'
import CodeReducer from './CodeReducer'
import FileTreeReducer from './FileTreeReducer'

const rootReducer = combineReducers({
  MainReducer,
  CodeReducer,
  FileTreeReducer,
})

export default rootReducer
