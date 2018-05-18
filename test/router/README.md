react-router V4.0

例子：
	import React from 'react'
	import {BrowserRouter as Router,Route,Link} from 'react-router-dom'//注:react-router-dom是对react-router的作了一些小升级的库，代码基于react-router

	const Basic = () => (
	  <Router>
	    <div>
	      <ul>
	        <li><Link to="/">Home</Link></li>
	        <li><Link to="/page1">Page1</Link></li>
	        <li><Link to="/page2">Page2</Link></li>
	      </ul>

	      <hr/>

	      <Route exact path="/" component={Home}/>
	      <Route path="/page1" component={Page1}/>
	      <Route path="/page2" component={Page2}/>
	    </div>
	  </Router>
	)

1、跟之前的版本一样，Router这个组件还是一个容器，但是它的角色变了，4.0的Router下面可以放任意标签了，这意味着使用方式的转变，它更像redux中的provider了。通过上面的例子相信你也可以看到具体的变化。而真正的路由通过Route来定义。
2、Link标签目前看来也没什么变化，依然可以理解为a标签，点击会改变浏览器Url的hash值，通过Route标签来捕获这个url并返回component属性中定义的组件，
3、你可能注意到在为"/"写的路由中有一个exact关键字，这个关键字是将"/"做唯一匹配，否则"/"和"/xxx"都会匹配到path为"/"的路由，制定exact后，"/page1"就不会再匹配到"/"了。如果你不懂，动手试一下~



每个history对象都有以下属性：
	history.length - 历史堆栈中的条目数量
	history.location - 当前位置（见下文）
	history.action - 目前的导航行动（见下文）
	此外，createMemoryHistory提供history.index和history.entries属性，让您检查历史堆栈。

history 对象可以用于以编程方式使用以下方法更改当前位置：
	history.push(path, [state]) 替换当前url
	history.replace(path, [state])替换当前的url
	history.go(n)  跳转页面
	{
	  1、history.push(location);history.go(location); 地址会记录到history的堆栈里。
	  2、history.replace(location);history.go(location); 替换当前的url ，地址不会被记录
	}
	history.goBack() 回到初始的位置  每次最开始的位置

	history.goForward()
	history.canGo(n)（只在createMemoryHistory）