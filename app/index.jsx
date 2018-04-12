import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import  RouteMap from './router/routerMap'

import configureStore from './store/configureStore'
import createBrowserHistory from 'history/createBrowserHistory'
import 'react-flexible'
import './static/css/common'
const store = configureStore();
const hashHistory = createBrowserHistory();

render(
	<Provider store={store}>
		<RouteMap history={hashHistory}/>
	</Provider>,
	document.getElementById('root')
)