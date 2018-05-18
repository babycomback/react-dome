import React from 'react'
import { render } from 'react-dom'
import Perf from 'react-addons-perf'
import { Provider } from 'react-redux'

// import { hashHistory } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import configureStore from './store/configureStore'


import RouteMap from './router/routerMap'
// 通用样式
import './static/css/common.less'

// 接口访问
import { getData, postData } from './fetch/test.js'

const hashHistory= createBrowserHistory();
const store = configureStore();


getData();
// postData();

if(__DEV__){
	window.Perf = Perf;
}

// 路由
render(
	<Provider store={store}>
		<RouteMap history={hashHistory}/>
	</Provider>,
	document.getElementById('root')
)
