import React from 'react'
import { render } from 'react-dom'
import Perf from 'react-addons-perf'
import Todo from './containers/Todo/index.jsx'

if(__DEV__){
	window.Perf = Perf;
}

render(
	<Todo/>,
	document.getElementById('root')
)