import React from 'react'
import './style.less'

class NoviceItem extends React.Component{
	constructor(props,context){
		super(props,context);
	}
	render(){
		const item = this.props.data;
		return (
			<div className="novice-item item clear-fix clearance-bottom">
				<div className="item-title">
					<img className="img" src="../../../static/images/list/new.png"/>
					<span className="name">{item.prodTitleNew}</span>
				</div>
				<div className="item-conent">
					<div>
						<div className="float-left interestrate">{item.minRate.toFixed(1)}<span>%</span></div>
						<div className="float-left cycle">期限{item.loanCycle}周</div>
					</div>
					<div>
						<div className="float-left explain">历史年化收益</div>
						{
							item.loanCycle == 2 
							? <div className="float-left explain">加入上限100,000元</div>
							: <div className="float-left explain">加入上限120,000元</div>
						}
						
					</div>
					
				</div>
				<div className="item-botton">立即加入</div>
			</div>
		)
	}
}

export default NoviceItem