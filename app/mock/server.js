var koa = require('koa');
var Router = require('koa-router');

var app = new koa();
var router = new Router();

var koaBody = require('koa-body')();

// 解析上下文里node原生请求的post参数
function parsePostData(ctx){
	return new Promise((resolve,reject) => {
		try{
			let postdata = '';
			ctx.req.addListener('data',(data) => {
				postdata += data;
			});
			ctx.req.addListener('end',function(){
				let parseData = parseQueryStr(postdata);
				resolve(parseData);
			})
		}catch(err){
			reject(err)
		}
	})
}

function parseQueryStr(queryStr){
	let queryData = {};
	let queryStrList = queryStr.split('&');
	console.log(queryStrList)
	for(let [index, queryStr] of queryStrList.entries()){
		let itemList = queryStr.split('=');
		queryData[itemList[0]] = decodeURIComponent(itemList[1]);
	}
	return queryData;
}


// 首页 
var homeAdData = require('./home/home.js')
router.get('/api/queryFirstPageInfoNew.p2p',async(ctx,next) =>{
	ctx.body = homeAdData
})

// 理财页
financingData = require('./moneylist/moneylist.js');
financingDataTwo = require('./moneylist/14MoneyList.js');
router.post('/api/queryInvestPageInfo.p2p',async(ctx,next) => {
	 // 参数
	let postdata = await parsePostData(ctx);
	if(postdata.week14 == 1){
		ctx.body = financingDataTwo;
	}else{
		ctx.body = financingData;
	}
})

// 登录
const userList = require('./login/login.js');
router.post('/api/login.p2p',async(ctx,next) => {
	let parseData = await parsePostData(ctx);
	let flag = false;
	for(let [index, userData] of userList.entries()){
		console.log(userData.phoneName,parseData.loginName,userData.password,parseData.password)
		if(userData.phoneName == parseData.loginName && userData.password == parseData.password){
			flag = true;
		}
	}
	if(flag){
		ctx.body = {code:1,message:'操作成功'};
	}else{
		ctx.body = {code:0,message:'用户名密码错误'};
	}
	
});

// 账户页
const accountData = require('./account/account.js')
router.post('/api/u/queryMyAccountInfo.p2p',async(ctx,next) => {
	ctx.body = accountData;
});

// 社区
const explore = require('./explore/explore.js')
router.get('/api/queryList.do',async(ctx,next)=>{
	let pageNum = await parsePostData(ctx);
	if(pageNum){
		ctx.body = explore;
	}
})

app.use(router.routes())
app.use(router.allowedMethods());
	app.listen(4000,function(){
		console.log('listen at http://location:' + 4000)
	})