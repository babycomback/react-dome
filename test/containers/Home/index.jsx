import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component{
	render(){
		return(
			<div>
				<div>Home</div>
				<div onClick={this.nextClick.bind(this)}>to do list</div>
				<Link to="reduxDemo">reduxDemo</Link>
			</div>
		)
	}
	nextClick(){
		const location = {
		  pathname: '/Todo',
		  state: { fromDashboard: false }
		}
		this.props.history.push('/Todo')
		this.props.history.go('/Todo')
	}
}

export default Home