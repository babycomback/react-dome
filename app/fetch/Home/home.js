import { get } from '../get'

export function HomeData(){
	const result = get('/api/queryFirstPageInfoNew.p2p');
	return result;
}