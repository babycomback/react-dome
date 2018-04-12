var koa = require('koa');
var Router = require('koa-router');

var app = new koa();
var router = new Router();

var koaBody = require('koa-body')();
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
	let postdata = '';
	var week14 = 2;
	ctx.req.addListener('data', (data) => {
			postdata += data;

	})
	ctx.req.addListener('end', function() {
	 	
	 	console.log(week14 == 1)

	 	if(week14 == 1){
			ctx.body = '44';
		}else{
			ctx.body = financingData;
		}
	})
	
   
})

// 登录
router.post('/api/login.p2p',async(ctx,next) => {
	console.log(ctx)
	console.log(ctx.request.body)
	ctx.body = {error:0};
});

app.use(router.routes())
app.use(router.allowedMethods());
	app.listen(4000,function(){
		console.log('listen at http://location;' + 4000)
	})