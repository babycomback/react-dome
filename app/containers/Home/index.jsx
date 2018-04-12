import React from 'react'
import { Route, Switch } from 'react-router'

import Banner from './subpage/Banner'
import Novice from './subpage/Novice'
import RegularList from './subpage/RegularList'
import MessagesList from './subpage/MessagesList'
import Footer from '../../components/footer'

import { HomeData } from '../../fetch/Home/home'

class Home extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			data:''
		}
	}
	render(){
		return(
			<div className="wrapper">
				<Banner bannerList={this.state.data.bannerList}/>
				<Novice/>
				<RegularList listData={this.state.data.prodList}/>
				<MessagesList listData={this.state.data.postList}/>
                <Footer/>
			</div>
		)
	}
	componentDidMount(){
		const result = HomeData();
		result.then(res => {
			return res.json();
		}).then(json => {
            // 处理获取的数据
            const data = json;
        	if(data.code == 1){
        		this.setState({
               		data: data.data
            	})
        	}
        }).catch(ex => {
            // 发生错误
            if (__DEV__) {
                console.error('首页广告模块获取数据报错, ', ex.message)
            }
        })
	}

}

export default Home