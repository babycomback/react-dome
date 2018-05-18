import React from 'react'

class AccountList extends React.Component{
	constructor(props,context){
		super(props,context);
		
	}
	render(){
		return (
			<ul className="tap">
				<li className="regular">
					<div className="title">固收产品</div>
					<div className="remark">查询我的固收资产</div>
				</li>
				<li className="current">
					<div className="title">周周涨</div>
					<div className="remark">查询我的周周涨资产</div>
				</li>
				<li className="li06">
					<div className="title">交易明细</div>
					<div className="remark">查询我的资金明细</div>
				</li>
				<li className="li01">
					<div className="title">会员中心</div>
					<div className="remark">查询我的特权</div>
				</li>
				<li className="li02">
					<div className="title">优惠券</div>
					<div className="remark">查询我的优惠券</div>
				</li>
				<li className="li03">
					<div className="title">现金奖励</div>
					<div className="remark">查询我的现金奖励</div>
				</li>
				<li className="li04">
					<div className="title">邀请记录</div>
					<div className="remark">查询我的邀请记录</div>
				</li>
				<li className="li05">
					<div className="title">我的积分</div>
					<div className="remark">查询我的积分</div>
				</li>
			</ul>
			)
	}
}

export default AccountList