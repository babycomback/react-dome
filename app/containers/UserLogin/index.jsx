import React from 'react'
import { userlogin }  from '../../fetch/UserLogin/userlogin.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginComponten  from '../../components/Login/index.jsx'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo' 
import './style.less'


class UserLogin extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state ={
			checking:true
		}
		
	}
	render(){
		return (
			<div className="body">
			{ 
				this.state.checking 
				? <div>{/*等待中*/}</div> 
				: <LoginComponten loginHandle={this.loginHandle.bind(this)} />
			}
			</div>
		)
	}
	componentDidMount(){
		this.doCheck()
	}

	doCheck(){
		const userinfo = this.props.userinfo;
		if(userinfo.phone){
			// 已经登录跳转到账户页
			this.goAccount()
		}else{
			// 未登录，则验证结束
			this.setState({
				checking:false
			})
		}
	}
	loginHandle(datas){
		const result = userlogin(datas);
		result.then(res =>{
			return res.json()
		}).then(json =>{
			const data = json;
			console.log(data)
			if(data.code == 1){
				const actions = this.props.userInfoActions
				const userlogin = this.props.userinfo
				userlogin.phone = datas.loginName
				actions.update(userlogin)
				console.log(datas.loginName)
				console.log(userlogin)
				this.props.history.push('/Home');
			}
		})
		// 调用登录的接口
	}

    goAccount(){
		this.props.history.push('/Account')
    }
}

// ------------------------rudex react 绑定----------------------------

function mapStateToProps(state){
	return {
		userinfo:state.userinfo
	}
}

function mapDispathToProps(dispath){
	return {
		userInfoActions : bindActionCreators(userInfoActionsFromOtherFile,dispath)
	}
}

export default connect(
	mapStateToProps,
	mapDispathToProps
)(UserLogin)