import React from 'react'

import './style.less'

class Novice extends React.Component{
	render(){
		return (
			<div className="clearance-bottom">
				<div className="acttitle">
					<span>新人专享</span> 
					<span>三重好礼</span>
				</div>
				<div className="acttitle">
					<div className="novice clear-fix">
						<div className="noviceChild">
							<div className="noviceMoney">12.00</div>
							<div className="noviceTitle">新手标(%)</div>
						</div>
						<div className="noviceChild2">+</div>
						<div className="noviceChild">
							<div className="noviceMoney">318</div>
							<div className="noviceTitle">红包(元)</div>
						</div>
						<div className="noviceChild2" >+</div>
						<div className="noviceChild noviceChild-three">
							<div className="noviceMoney">0.5</div>
							<div className="noviceTitle">加息券(%)</div>
						</div>
					</div>
					<div className="actbtn"><span>注册领取</span></div>
				</div>
			</div>
		)
	}
}

export default Novice