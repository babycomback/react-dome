import React from 'react'

import './style'
 import	img2 from './images/Group.png';

class AccountHeader extends React.Component{
	constructor(props,context){
		super(props,context);
	}
	render(){
		return (
			<div>
				<div className="title">
					<div className="header">
						<img src={require('./images/Group.png')} className="fl group"/>
						<img src={this.props.data.avatar} className="fl userHeaderImg"/>
					</div>

					<div className="total">
						<div className="investment-p">
							<span >总资产(元)</span> 
							{/*<img src="../../images/pages/my-account3.0/show.png" className="show" />*/}
						</div>
						<div className="investment">{this.props.data.totalAmt}</div>
					</div>

					<div className="clearfix maindata">
						<div className="data-left">
							<div className="maindata-title">昨日收益(元)</div>
							<div className="money">{this.props.data.totalIncome}</div>
							
						</div>
						
						<div className="data-right">
							<div className="maindata-title">累计收益（元）</div>
							<div className="money">{this.props.data.totalIncome}</div>
							
						</div>
					</div>
				</div>

				<div className="mainbtn">
					<div>可用余额(元)</div>
					<div>
						<span className="accountAmt">10,222,388.44</span>
				       	<a href="javascript:;" className="withdraw-btn" >提现</a>
				       	<a href="javascript:;" className="topup-btn">充值</a>
					</div>		      
				</div>
			</div>



			)
	}

	
}

export default AccountHeader