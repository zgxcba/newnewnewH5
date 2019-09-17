var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-Webpack-Plugin');

var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';
var getHtmlConfig = function(name){
	return {
		template: './src/view/'+name+'.html',
			filename: 'view/'+name+'.html',
			inject: true,
			hash:true,
			chunks:['common','index']
	}
}

var config = {
	entry:{
		'common':['./src/page/common/index.js'],
		'index':'./src/page/index/index.js',
		'user-login':'./src/page/user-login/index.js'
	},
	output:{
		path: path.resolve(__dirname,'dist'),
		publicPath:'/dist',
		filename:'js/[name].js'
	},
	externals:{
		'jquery' : 'Window.jQuery'
	},
	/*optimization:{
		splitChunks:{
			cacheGroups:{
				commons:{
					name:'base',
					chunks:'initial',
					minChunks:2,
					minSize:0
				}
			}
		}
	},*/
	module:{
		rules:[
		{test:/\.css$/,
		loader:ExtractTextPlugin.extract({
			fallback:"style-loader",
			use:"css-loader"
		        })
	        },
	        {
	        	test:/\.(gif|png|jpg|woff|svg|eot|ttf).??.*$/,
	        	loader:'url-loader?limit=100&name=resource/[name].[ext]'
	        }
		]
	},
	plugins:[
		new ExtractTextPlugin("css/[name].css"),
		new HtmlWebpackPlugin(getHtmlConfig('index')),
		new HtmlWebpackPlugin(getHtmlConfig('user-login'))
	],
	resolve:{
		alias:{
			util:__dirname+'/src/util'
		}
	}
}

if('dev' === WEBPACK_ENV){
	config.entry.common.push('webpack-dev-server/client?http://localhost:8088');
}

module.exports = config;