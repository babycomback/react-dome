import { createStore } from 'redux'

export default function(){

/*定义规则*/
function counter(state=0, action){
	switch(action.type){
		case 'INCREAMENT':return state + 1;
		case 'DECREAMENT':return state - 1;
		default :return state;
	}
}

/*根据规则生成store*/
const store = createStore(counter())
/*定义数据*/
store.subscribe(() => {
	console.log('fn1 -> current state', store.getStore());
})

store.subscribe(() => {
	console.log('fn2 -> current state', store.getStore());
})

/*触发变化*/
store.dispatch({type:'INCREAMENT'})
store.dispatch({type:'INCREAMENT'})
store.dispatch({type:'DECREAMENT'})

}