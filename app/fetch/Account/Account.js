import { post } from '../post'

export function accountData(){
	const result = post('/api/u/queryMyAccountInfo.p2p');
	return result;
}