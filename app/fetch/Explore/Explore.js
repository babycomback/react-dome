import { get } from '../get.js'

export function exploreData(pageNum){
	const result = get('api/queryList.do');
	return result;
}