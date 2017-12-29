import React from 'react'

class Input extends React.Component{
	constructor(props,context){
		super(props,context)
		this.state = {
			value:''
		}
	}
	render(){
		return <input
			style={{width:'100%',height:'100px',fontSize:'40px',color:'#000'}}
			onKeyUp={this.onKeyUpHeadler.bind(this)}
			value={this.state.value}
			onChange={this.changeHealder.bind(this)}
		/>
	}
	changeHealder(e){
		this.setState({
			value:e.target.value
		})
	}
	onKeyUpHeadler(e){
		const value = this.state.value;
		if(e.keyCode == 13 && value.trim()){
			this.props.submitFn(value)
			this.setState({
				value:''
			})
		}
	}
}
export default Input