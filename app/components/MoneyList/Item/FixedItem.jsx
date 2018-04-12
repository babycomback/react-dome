import React from 'react'
import './style.less'

class FixedItem extends React.Component{
	constructor(props,context){
		super(props,context);
	}
	render(){
		const item = this.props.data;
		return (
			<div className="fixed-item item clear-fix clearance-bottom">
				<div className="item-title">
					<span className="name">{item.prodTitleNew}</span>
					{item.label != '' 
						?<span className="addRate">
							<img className="img" src="../../../static/images/list/gift.png"/>
							<span>{item.label}</span>
						</span>
						:''
					}
				</div>
				<div className="item-conent">
					<div className="float-left">
						<div className="interestrate">{item.minRate.toFixed(1)}<span>%</span>
						{item.addRate > 0 ? <span>+{item.addRate.toFixed(1)}%</span>:''}
						{item.addInterestLabel !='' ? <span>{item.addInterestLabel}%</span>:''}
						</div>
						<div className="explain">历史年化收益</div>
					</div>
					<div className="float-left">
						<div className="cycle">期限{item.loanCycle}周</div>
						<div className="explain"  style={{width:'2.6rem'}}>期限</div>
					</div>
					<div className="float-left item-botton">立即加入</div>
				</div>
			</div>
		)
	}
}

export default FixedItem