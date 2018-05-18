var koa = require('koa');
var Router = require('koa-router');

var app = new koa();
var router = new Router();

var koaBody = require('koa-body')();
// 
router.get('/1',async(ctx,next) =>{
	console.log('in admin');
	// ctx.response.body = 'dfddfffd';
	ctx.body = 'dfddfffd';
	await next();
});
router.get('/api',(ctx,next) => {
	ctx.body = 'test data'
});

router.get('/',function (ctx,next){
	ctx.response.body = "hello koa !"
});

router.get('/api',function (ctx,next){
	ctx.body = 'test data'
});

router.get('/api/1',function (ctx,next){
	ctx.body = 'this data 1'
})

router.get('/api/2',function (ctx,next){
	ctx.body ={
		a:1,
		b:'123'
	}
});

router.post('/api/post',koaBody,function *(next){
	console.log(this.request.koaBody)
	this.body = JSON.stringify(this.request.body)
});

// 开启服务并生成路由
// app.use(router.routes())
// 	.use(router.allowedMethods());
// app.use(ctx => {
// 	ctx.body = 'hello koa'
// })
app.use(router.routes());
app.use(router.allowedMethods());

     app.listen(4000, function () {
        console.log('listen at http://localhost:' + 4000);
    });

// app.listen(4000,() => console.log('koa start at 4000'));

// module.exports = app;