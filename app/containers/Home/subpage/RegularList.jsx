import React from 'react'

import './style.less'

class RegularList extends React.Component{
	constructor(props, context){
		super(props, context);
	}
	render(){
		var data = this.props.listData != null ? this.props.listData : [];
		return (
			<div>
			{
				data.length > 0 
				? <div className="clearance-bottom">
					<div className="acttitle">
						<span>V精选</span>
						<i>固收产品&nbsp;&nbsp;精心挑选</i>
						<i className="float-right">
						更多
						<img src="../../static/images/home/nextPage.png"/>
						</i>
					</div>
					<div className="acttitle clear-fix">
					{
						data.map((item,index) =>{
							return (
								<div className="regularlist" key={index}>
									<div className="textOverflow">{item.prodTitle}</div>
									<div>{item.minRate}
										<span>%</span>
										{
											item.addRate > 0
											? <span>+{item.addRate}</span>
											:''
										}
									</div>
									<div>历史年华收益</div>
								</div>
							)
						})
					}
						
					</div>
				</div>
				:<div></div>
			}
			</div>
			
		)
	}
	componentDidMount(){
		console.log('查看用户信息',this.state)
	}
}

export default RegularList