import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './store/ConfigureStore'
import mainContainer from './containers/MainContainer'
import sideMenu from './components/SideMenu'
import injectTapEventPlugin from 'react-tap-event-plugin'

require("../style/reset.scss")
require("roboto-fontface/css/mixins.scss")

injectTapEventPlugin()

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={mainContainer}>
        <IndexRoute component={sideMenu} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('content')
)
