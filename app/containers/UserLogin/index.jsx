import React from 'react'
import { userlogin }  from '../../fetch/UserLogin/userlogin.js'

import './style.less'
class UserLogin extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state ={
			phone:'123',
			password:'123'
		}
		
	}
	render(){
		return (
			<div className="body">
				<div className="login-img">
		            <img src="../../static/images/account/logo.png" style={{'width':'3.6rem'}}/>
		        </div>

	            <div className="icon-phone">
                   <input type="tel" name="phone" placeholder="手机号码" value={this.state.phone} onChange={this.handleChangePhone.bind(this)}/>
	            </div>

	            <div className="icon-lock">
                    <input type="password" name="password" placeholder="登录密码" value={this.state.password} onChange={this.handleChangePassport.bind(this)}/>
                    <img src="../../static/images/account/login-show3.0.png" className="show-img"/>
	            </div>

		        <div className="forget">
		            <div className="forgetPassworld"><span className="forgotPassword">忘记密码?</span></div>
		        </div>

		        <div className="login-btn" onClick={this.login.bind(this)}>登录</div>
		        <div className="isAccept">
                 	<img src="../../static/images/account/ischecked-true.png" className="isChecked isTrue"/>
	                已阅读并同意
	                <a href="##" style={{color:'#2B6FF9'}}>V金融理财协议</a>
	            </div>
	            <div className="login-registered default">新用户注册</div>
			</div>
		)
	}
	login(){
		// this.checkForm();
		const data = {
			loginName:this.state.phone,
			password:this.state.password
		}
		console.log('data',data)
		userlogin(data)
		// 调用登录的接口
	}
	handleChangePhone(event){
		this.setState({
			phone:event.target.value
		})
	}
	handleChangePassport(event){
		this.setState({
			password:event.target.value
		})
	}
	checkForm(){
        if(this.state.phone.length == 0){
            Common2.toast('请输入手机号码');
            return false;
        }

        if(!Common.reg.mobile.test(phone)){
            Common2.toast('手机号码格式不正确');
            return false;
        }

        if(this.state.password.length == 0){
            Common2.toast('请输入密码');
            return false;
        }

         if(isChecked){
            Common2.toast('请先勾选并同意平台服务协议');
            return false;
        }

        formData.loginName = phone;
        formData.password = md5(password);
        return true;
    }
}

export default UserLogin