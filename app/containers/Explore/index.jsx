import React from 'react'
import { exploreData } from '../../fetch/Explore/Explore'

import ListComponent from '../../components/List'
import LoadMore from '../../components/LoadMore'
import Footer from '../../components/footer'

class Explore extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state = {
			data:[],
			pageNum:1,
			isMore:false,
			isLoadingMore:false
		}
	}
    render() {
        console.log(this.state.isLoadingMore)
        return (
            <div className="wrapper">
            {
            	this.state.data.length 
            	? <ListComponent data={this.state.data} /> 
            	: <div>{/*加载中...*/}</div>
            }
            {
            	this.state.isMore 
                ? <LoadMore isLoadingMore={this.state.isLoadingMore} LoadMoreFn={this.loadMoreData.bind(this)} /> 
            	: ''
            }
            <Footer/>
            </div>

        )
    }
    componentDidMount(){
    	this.loadFistPageData();
    }
    loadFistPageData(){
    	const pageNum = this.state.pageNum;
    	const result = exploreData(pageNum);
    	this.resultHandle(result)
    }
    loadMoreData(){
    	this.setState({
    		isLoadingMore:true
    	});
    	const pageNum = this.state.pageNum;
    	const result = exploreData(pageNum);
    	this.resultHandle(result)
    	this.setState({
    		pageNum:pageNum+1,
    		isLoadingMore:false
    	});
    }

    resultHandle(result){
    	result.then(res => {
    		return res.json()
    	}).then(json =>{
    		const data = json;
    		if(data.code == 1){
    			this.setState({
    				data:this.state.data.concat(data.data),
                    isMore:true
    			})
    		}
    	}).catch(ex => {
            if (__DEV__) {
                console.error('社区列表报错, ', ex.message)
            }
        })
    }
}
export default Explore
