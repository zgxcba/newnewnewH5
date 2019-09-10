var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
	entry:{
		'index':'./src/page/index/index.js',
		'login':'./src/page/login/index.js'
	},
	output:{
		path: path.resolve(__dirname,'dist'),
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
	        }
		]
	},
	plugins:{
		new ExtractTextPlugin("css/[name].css")
	}
}
module.exports = config;