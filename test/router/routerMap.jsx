import React from 'react'
import { Router, Route } from 'react-router'

import App from '../containers/App'
import Home from '../containers/Home/index'
import Todo from '../containers/Todo/index'
import reduxDemo from '../containers/reduxDemo/index'

class RouteMap extends React.Component{
	render(){
		return (
			<Router history={this.props.history}>
				<div>
				    <Route exact path="/" component={App}/>
			    	<Route path='/Home' component={Home}/>
			    	<Route path="/Todo" component={Todo}/>
			    	<Route path="/reduxDemo" component={reduxDemo}/>
		    	</div>
			</Router>
		)
	}
}

export default RouteMap