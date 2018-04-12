import React from 'react'
import { Router, Route } from 'react-router'

import App from '../containers'
import Home from '../containers/Home'
import Money from '../containers/Money'
import Explore from '../containers/Explore'
import Account from '../containers/Account'
import UserLogin from '../containers/UserLogin'

class RouteMap extends React.Component{
	render(){
		return (
			<Router history={this.props.history}>
			<div>
				<Route exact path="/" component={App}/>
				<Route path="/Home" component={Home}/>
				<Route path="/Money" component={Money}/>
				<Route path="/Explore" component={Explore}/>
				<Route path="/Account" component={Account}/>
				<Route path="/UserLogin" component={UserLogin}/>
			</div>
			</Router>
		)
	}
}

export default RouteMap