import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { Link ,NavLink} from 'react-router-dom'

import './style'

class Footer extends React.Component{
	 constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: true
        }
    }
	render(){
		return (
			<div className="nav">
				<NavLink to='/Home' activeClassName="selected">
					<div  className="iconfont">&#xe689;</div>
					<div >首页</div>
				</NavLink>
				<NavLink to='/Money' activeClassName="selected">
					<div  className="iconfont">&#xe670;</div>
					<div >理财</div>
				</NavLink>
				<NavLink to='/Explore' activeClassName="selected">
					<div  className="iconfont">&#xe626;</div>
					<div >社区</div>
				</NavLink>
				<NavLink to='/UserLogin' activeClassName="selected">
					<div  className="iconfont">&#xe615;</div>
					<div >我的</div>
				</NavLink>
			</div>
		)
		
	}
}

export default Footer