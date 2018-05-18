import React from 'react'
import './style.less'

class Login extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			phone:'',
			password:''
		}
	}

	render(){
		return (
			<div>
				<div className="login-img">
		            <img src="../../static/images/account/logo.png" style={{'width':'3.6rem'}}/>
		        </div>





	            <div className="icon-phone">
                   <input type="tel" name="phone" placeholder="手机号码" 
                   value={this.state.phone} 
                   onChange={this.handleChangePhone.bind(this)}/>
	            </div>

	            <div className="icon-lock">
                    <input type="password" name="password" placeholder="登录密码" 
                    value={this.state.password} 
                    onChange={this.handleChangePassport.bind(this)}/>
                    <img src="../../static/images/account/login-show3.0.png" className="show-img"/>
	            </div>

		        <div className="forget">
		            <div className="forgetPassworld"><span className="forgotPassword">忘记密码?</span></div>
		        </div>

		        <div className="login-btn" onClick={this.clickHandle.bind(this)}>登录</div>
		        <div className="isAccept">
                 	<img src="../../static/images/account/ischecked-true.png" className="isChecked isTrue"/>
	                已阅读并同意
	                <a href="##" style={{color:'#2B6FF9'}}>V金融理财协议</a>
	            </div>
	            <div className="login-registered default">新用户注册</div>
			</div>
		)
	}

	clickHandle(){
		this.checkForm();
		const data = {
			loginName:this.state.phone,
			password:this.state.password
		}
		console.log(1111)
		const loginHandle = this.props.loginHandle;
		loginHandle(data)
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
		// 正则
		var Common = {
		    reg: {
		      mobile: /^((\+86)|(\(\+86\)))?-?(13|14|15|18|17)[0-9]{9}$/, // 验证手机号码
		      pwd: /^[a-zA-Z0-9]{6,20}$/, // 登录密码 6-16位字符
		      payPwd: /^[0-9]{6}$/, // 交易密码 6-16位字符
		      isNum: /^[0-9]*$/,
		      money: /^\d{1,12}(?:\.\d{1,2})?$/, // money
		      idCard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/ // 身份证
		    }
		}
		var phone = this.state.phone;
		var password = this.state.password;
        if(phone.length == 0){
            alert('请输入手机号码');
            return false;
        }

        if(!Common.reg.mobile.test(phone)){
            alert('手机号码格式不正确');
            return false;
        }

        if(password == 0){
            alert('请输入密码');
            return false;
        }

        //  if(isChecked){
        //     alert('请先勾选并同意平台服务协议');
        //     return false;
        // }
        return true;
    }

}

export default Login