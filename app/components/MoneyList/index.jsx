import React from 'react'
import Footer from '../footer'
import NoviceItem from './Item/NoviceItem'
import FixedItem from './Item/FixedItem'


class MoneyList extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="wrapper">
			{
				this.props.noviceData 
				? this.props.noviceData.map((item,index) => {
					return <NoviceItem data={item} key={index}/>
				})
				:''
			}
			{
				this.props.FixedData 
				? this.props.FixedData.map((item,index) => {
					return <FixedItem data={item} key={index}/>
				})
				:''
			}
			<div style={{textAlign:'center',color:'#9B9B9B',fontSize:'0.32rem',lineHeight:'0.6rem',marginBottom:'0.3rem'}}>
				<div>市场有风险，投资需谨慎</div>
			</div>
				<Footer/>
			</div>
		)
	}
}

export default MoneyList