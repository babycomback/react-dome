import React from 'react'
import { render } from 'react-dom'
import Perf from 'react-addons-perf'//性能优化

if(__DEV__){
	window.Perf = Perf;
	//运行程序。在操作之前先运行Perf.start()开始检测，然后进行若干操作，运行Perf.stop停止检测，然后再运行Perf.printWasted()即可打印出浪费性能的组件列表。在项目开发过程中，要经常使用检测工具来看看性能是否正常。
}

class App extends React.Component{
	render(){
		return <p>hello world</p>
	}
}

render(
 	<App/>,
 	document.getElementById('root')
)