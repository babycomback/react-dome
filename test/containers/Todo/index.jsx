import React from 'react'
import List from '../../components/List/index.jsx'
import Input from '../../components/Input/index.jsx'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

class Todo extends React.Component{
	constructor(props,context){
		super(props, context)
		this.state = {
			todos:[]
		}
	}
	render(){
		return (
				<div>
					<Input submitFn={this.submitFn.bind(this)}/>
					<List deleteFn={this.deleteFn.bind(this)} todos={this.state.todos}/>
					<div onClick={this.callback.bind(this)}>goBack</div>
				</div>
			)
	}
	submitFn(value){
		const id = this.state.todos.length;
		this.setState({
			todos:this.state.todos.concat({
				id:id,
				text:value
			})
		})
	}
	deleteFn(id){
		var data = this.state.todos;
		this.setState({
			todos:data.filter(item =>{
				if(item.id !== id){
					return item;
				}
			})
		})
	}
	callback(){
		console.log('history:',history)
		console.log('history.length:',history.length)
		history.goBack()

	}
}

export default Todo