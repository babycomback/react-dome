import React from 'react'
import { connect } from 'react-redux'
import { bindAxtionCreators } from 'redux'

import * as userinfoActions from '../../../actions/userinfo'

import A from '../../../components/reduxDemo/userid.jsx'
import B from '../../../components/reduxDemo/city'
import C from '../../../components/reduxDemo/updata'

class Hello extends React.Component{
	render(){
		return (
			  <div>
                <p>hello world</p>
                <hr/>
                <A userinfo={this.props.userinfo}/>
                <hr/>
                <B userinfo={this.props.userinfo}/>
                <hr/>
                <C actions={this.props.userinfoActions}/>
            </div>
		)
	}
	componentDidMount(){
		// 模拟登陆
		this.props.userinfoActions.login({
			userId:'abc',
			city:'北京'
		})
	}
}

function mapStateToProps(state){
	return {
		userinfo: state.userinfo
	}
}

function mapDispatchToProps(dispatch){
	return {
		userinfoActions:bindAxtionCreators(userinfoActions, dispatch)
	}
}

export default connect(
		mapStateToProps,
		mapDispatchToProps
	)(Hello)