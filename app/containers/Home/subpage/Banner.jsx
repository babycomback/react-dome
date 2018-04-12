import React from 'react'
import ReactSwipe from 'react-swipe'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import '../../../static/css/common.less'
import './style.less'


class Banner extends React.Component{
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            // banner下四个按钮的数据
            indexActive: [
                {
                    title:'邀请有礼',
                    href:'../pages/invite/myInvite.html',
                    img:'../../../static/images/home/daily-drawNew3.png'
                },
                {
                    title:'每日抽奖',
                    href:'../pages/invite/myInvite.html',
                    img:'../../../static/images/home/invite-friendNew3.png'
                },
                {
                    title:'信息披露',
                    href:'../pages/invite/myInvite.html',
                    img:'../../../static/images/home/platformNew3.png'
                },
                {
                    title:'运营月报',
                    href:'../pages/invite/myInvite.html',
                    img:'../../../static/images/home/safeNew3.png'
                }
            ]
        }
    }
	render(){
		const opt = {
            auto: 2500,
            callback: function (index) {
                // 更新当前轮播图的index  
                this.setState({index: index});
            }.bind(this)
        }
        var arr = this.props.bannerList != null ? this.props.bannerList : [];
        return (
            <div id="home-category" className="clearance-bottom">
                {
                    arr.length != 0 
                    ? <ReactSwipe swipeOptions={opt}>
                        {
                            arr.map((item,index)=>{
                                return (
                                    <div key={index}>
                                        <div>
                                            <img style={{width:'100%'}} src={item.filePath}/>
                                        </div>
                                    </div>
                                )
                                
                            })
                        }
                      </ReactSwipe>
                    :<div>123</div>
                }
              {/*<div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>*/}
               <div className="index-active">
                    {
                        this.state.indexActive.map((item,index) => {
                            return (
                                <a key={index}  href={item.href}>
                                   <img src={item.img}/>
                                   <p>{item.title}</p>
                               </a>
                            )
                        })
                    }
               </div>
            </div>
        )
	}
}

export default Banner