import { post } from '../post'

export function userlogin(data){
	var result = post('/api/login.p2p',{
		'loginName':data.loginName,
		'password':data.password
	})
	return result;
}