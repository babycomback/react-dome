import 'whatwg-fetch'
import 'es6-promise'

function params(obj){
	var result = '';
	var item;
	for(item in obj){
		result += '&' + item + '=' + encodeURIComponent(obj[item]);
	}
	if(result){
		result = result.slice(1);
	}
	return result;
}

export function post(url,paramsObj){
	var result = fetch(url,{
		method:'POST',
		credentials:'include',
		header:{
			'Accept':'application/json,text/plain,*/*',
			'Content-Type':'application/x-www.form-urlencoded'
		},
		body:params(paramsObj)
	});
	return result;
}