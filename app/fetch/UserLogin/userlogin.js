import { post } from '../post'

export function userlogin(data){
	console.log('调用接口',data)
	var result = post('/api/login.p2p',{
		'loginName':data.loginName,
		'password':data.password
	})
	return result;
}