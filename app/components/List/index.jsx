import React from 'react'
import Item from './Item'

class ListItem extends React.Component {
	constructor(props,context){
		super(props,context)
	}
    render() {
        return (
            <div>
                {this.props.data.map((item,index) => {
                       return <Item key={index} data={item} />
                })}
            </div>

        )
    }
    
}
export default ListItem
