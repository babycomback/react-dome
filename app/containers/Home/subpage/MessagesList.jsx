import React from 'react'

class MessagesList extends React.Component{
	constructor(props, context){
		super(props, context)
	}
	render(){
		var data = this.props.listData != null ? this.props.listData : [];
		return (
			<div>
				{
					data.length > 0
					?<div className="clearance-bottom">
						<div className="acttitle">
							<span>金融研究所</span>
						</div>
						{
							data.map((item,index) => {
								return (
									<div className="acttitle messageslist clear-fix" key={index}>
										<div className="float-left">
											<div className="financeRsh-title textOverflow">{item.postTitle}</div>
											<div className="financeRsh-content textOverflow">{item.postDigest} </div>
											<div className="financeRsh-contact">
												<img className="headImg" src="../../static/images/home/redlineTitle.png" />
												<span>V金融报员</span>
												<span>•&nbsp; {item.replyCount}评论 </span>
											</div>
										</div>
										<div className="float-left financeResearch">
											<img src={item.firstPageImage}/>
										</div>
									</div>
								)
							})
						}
					</div>
					:''
				}
			</div>
		)
	}
}

export default MessagesList