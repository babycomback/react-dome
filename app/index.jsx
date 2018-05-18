import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import  AppRouter from './router/AppRouter'

import configureStore from './store/configureStore'
import 'react-flexible'
import './static/css/common'
const store = configureStore();

render(
	<Provider store={store}>
		<AppRouter/>
	</Provider>,
	document.getElementById('root')
)