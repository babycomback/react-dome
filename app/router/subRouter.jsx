import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'

import App from '../containers'
import Home from '../containers/Home'
import Money from '../containers/Money'
import Explore from '../containers/Explore'
import Account from '../containers/Account'
import UserLogin from '../containers/UserLogin'

export default class subRouter extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/Home" component={Home}/>
				<Route path="/Money" component={Money}/>
				<Route path="/Explore" component={Explore}/>
				<Route path="/Account" component={Account}/>
				<Route path="/UserLogin" component={UserLogin}/>
			</Switch>
		)
	}
}