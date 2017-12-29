import React from 'react'

class List extends React.Component{
	render(){
		const data = this.props.todos;
		return(
				<ul style={{marginTop:'10px',fontSize:'40px',lineHeight:'100px'}}>
					{data.map((item, index) => {
	                    return <li key={index} onClick={this.clickHandler.bind(this, item.id)}>{item.text}</li>
	                })}
				</ul>
			)
	}
	clickHandler(id){
		this.props.deleteFn(id);
	}
}
export default List