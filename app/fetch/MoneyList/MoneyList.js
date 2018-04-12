import { post } from '../post'

export function MoneyListData(paramsObj){
	const result = post('/api/queryInvestPageInfo.p2p',{
		"week14":paramsObj.week14
	});
	return result;
}