import React from 'react'
import './style'

class LoadMore extends React.Component{
	constructor(props,context){
		super(props,context)
	}
	render(){
		console.log(this.props.isLoadingMore)
		return (
			<div className="LoadMore" ref="LoadMore">
				{
					this.props.isLoadingMore 
					? <div>加载中</div> 
					: <div onClick={this.loadMoreHandle.bind(this)}>加载更多</div>
				}
			</div>
		)
	}
	loadMoreHandle() {
        // 执行传输过来的
        this.props.LoadMoreFn();
    }
    componentDidMount(){
    	//使用滚动时自动加载更多
    	const wrapper = this.refs.LoadMore;
    	const LoadMoreFn = this.props.LoadMoreFn;
    	let timeoutId;
    	function callback(){
    		const top = wrapper.getBoundingClientRect().top;//获取wrapper到屏幕顶的的距离
	    	const windowHeight = window.screen.height;//屏幕的高度
	    	// const windowHeight = window.screen.height;//屏幕的高度
	    	console.log(top , windowHeight)
	    	if(top && top < windowHeight){
	    		LoadMoreFn()
	    	}
    	}
    	
    	window.addEventListener('scroll', function(){
    		if(this.props.isLoadingMore){
    			return
    		}
    		if(timeoutId){
    			clearTimeout(timeoutId)
    		}
    		timeoutId = setTimeout(callback,50)
    	}.bind(this),false)

    }
}

export default LoadMore