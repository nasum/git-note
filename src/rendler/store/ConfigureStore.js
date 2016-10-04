import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'

const logger = createLogger()
const createAppStore = compose(
  applyMiddleware(thunk, logger)
)(createStore)


export default function ConfigureStore() {
  return createAppStore(rootReducer)
}
