let path = require('path');
let webpack = require('webpack');
let htmlWebpackPlugin = require('html-webpack-plugin');
let openBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry:path.resolve(__dirname,'./test/index.jsx'),
	output:{
		filename:'bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.(js|jsx)$/,
				exclude:/node_modules/,
				loader:'babel-loader',
				// use:{
				// 	loader:'babel-loader',
				// 	query:{
				// 		presets:['react']
				// 	}
				// }
			},
			// 不使用extract-text-webpack-plugin将css分离
			{
				test:/\.less$/i,
				exclude:/node_modules/,
				use:[
					'style-loader',
					{
						loader:'css-loader',
						options:{
							importLoaders:1
						}
					},
					{
						loader:'postcss-loader',
						options:{
							plugins:[
								require('autoprefixer')({
									broswers:['last 5 versions']
								})
							]
						}
					},
					{
						loader:'less-loader'
					}
				]
			},
			{
				test:/\.css$/,
				exclude:/node_modules/,
				use:[
					'style-loader',
					{
						loader:'css-loader',
						options:{
							importLoaders:1,
						}
					},
					{
						loader:'postcss-loader',
						options:{
							plugins:[
								require('autoprefixer')({
									broswers:['last 5 versions']
								})
							]
						}
					}
				]
			},
			// 使用extract-text-webpack-plugin将css分离
			// {
			// 	test:/\.less$/i,
			// 	exclude:/node_modules/,
			// 	// 这里使用
			// 	use:extractLESS.extract({
			// 		fallback:'style-loader',
			// 		use:[
			// 			{
			// 				loader:'css-loader',
			// 				options:{
			// 					importLoaders:1
			// 				}
			// 			},
			// 			{
			// 				loader:'postcss-loader',
			// 				options:{
			// 					plugins:[
			// 						require('autoprefixer')({
			// 							broswers:['last 5 versions']
			// 						})
			// 					]
			// 				}
			// 			},
			// 			{
			// 				loader:'less-loader'
			// 			}
			// 		]
			// 	})
			// },
			// {
			// 	test:/\.css$/,
			// 	exclude:/node_modules/,
			// 	use:extractCSS.extract({
			// 		fallback:'style-loader',
			// 		use:[
			// 			{
			// 				loader:'css-loader',
			// 				options:{
			// 					importLoaders:1,
			// 				}
			// 			},
			// 			{
			// 				loader:'postcss-loader',
			// 				options:{
			// 					plugins:[
			// 						require('autoprefixer')({
			// 							broswers:['last 5 versions']
			// 						})
			// 					]
			// 				}
			// 			}
			// 		]
			// 	})
			// },
			{
				test:/\.(png|jpg|gif|jpeg|bmp)$/i,
				exclude:/node_modules/,
				loader:'file-loader?limit=5000'//限制大小5kb；
			},
			{
				test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
				loader:'url-loader?limit=5000'//限制大小5kb；
			}
		]
	},
	resolve:{
		extensions:['.js','.json','.less','.css'],
		alias:{}
	},
	plugins:[
		// 对html进行打包
		new htmlWebpackPlugin({
			template:'./test/index.html'
		}),
		// 打开浏览器
		new openBrowserPlugin({
			url:'http://localhost:3000'
		}),
		// 判断是否是开发环境
		new webpack.DefinePlugin({
			__DEV__:JSON.stringify(JSON.parse((process.env.NODE_DEV == 'dev') || 'false'))
		})
	],
	devServer: {
		contentBase: path.join(__dirname, "app"),//告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
  		compress: true,//一切服务都启用gzip 压缩：
  		port: 3000,
        // color: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, //实时刷新
        //hot: true,  // 使用热加载插件 HotModuleReplacementPlugin
        //inline: true,

        // Display only errors to reduce the amount of output.
        //stats: 'errors-only',

        //host: "localhost", // Defaults to `localhost`   process.env.HOST
    }

}