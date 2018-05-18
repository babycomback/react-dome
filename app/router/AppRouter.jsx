import React,{Component} from 'react'
import { Route, Router } from 'react-router-dom'

import App from '../containers'
import subRouter from './subRouter'

import createBrowserHistory from 'history/createBrowserHistory'
const hashHistory = createBrowserHistory()

export default class AppRouter extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<Router history={hashHistory}>
				<App>
					<Route path="/" component={subRouter} />
				</App>
			</Router>
		)
	}
}