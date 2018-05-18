import { createStore } from 'redux'

// 第一步：定义计算规则
function counter(state = 0, action){
	switch (action.type){
		case 'INCREMENT': return state + 1;
		case 'DECREMENT': return state - 1;
		default : return state;
	}
}

// 第二步：计算规则生成 store （用来管理数据。创建前提：设定一个管理规则）
let store = createStore(counter);

// 第三步：定义数据 （即：state）变化之后的派发规则（数据发生变化会导致什么样的后果sunscribe）
sotre.subscribe(() =>{
	// 如何取得当前的数据store.getState();
	console.log('current state', store.getState())
})

// 触发数据变化 （通过dispath函数触发数据变化dispatch）
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'DECREMENT'})