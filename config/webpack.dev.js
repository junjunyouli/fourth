const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Manifest= require('webpack-manifest');
module.exports = {
	  entry: {
	  	index: [
	  		path.join(__dirname,"../src/public/pages/index.es"),
	  		path.join(__dirname,"../src/public/pages/add.js")
	  	],
	  	tags: [
	  		path.join(__dirname,"../src/public/pages/tags.es"),
	  		path.join(__dirname,"../src/public/pages/star.es")

	  	]
	  },
	  output: {
	    filename: 'public/pages/[name].js',
	    path: path.resolve(__dirname, '../build/')
	  },
	 module: {
		  rules: [
		    {
		      test: /\.es$/,
		      exclude: /(node_modules|bower_components)/,
		      use: {
		        loader: 'babel-loader',
		        options: {
		          presets: ["es2015","stage-0"]
		        }
		      }
		    },
		    {
		        test: /\.css$/,
		        use: ExtractTextPlugin.extract({
		          fallback: "style-loader",
		          use: "css-loader"
		        })
		      }
		  ]
	},
	  plugins:[
	  	new webpack.DefinePlugin({
	  		"process.env":{
	  			NODE_ENV: '"dev"'
	  		}
	  	}),
	  	new LiveReloadPlugin({appendScriptTag: true}),
	  	new ExtractTextPlugin("public/css/[name].css"),
	  	
	  	new webpack.optimize.CommonsChunkPlugin({
			    name: 'vendor',
			    filename: 'public/pages/common/[name].js',
		 }),
	  	new HtmlWebpackPlugin({  
		      filename: './views/template.html',
		      template: 'src/widget/template.html',
		      inject:false
		}),
		new HtmlWebpackPlugin({  
		      filename: './views/index.html',
		      template: 'src/views/index.js',
		      inject:false,
		       chunks: ['vendor', 'index', 'tags']
		}),
		new HtmlWebpackPlugin({  
		      filename: './widget/index.html',
		      template: 'src/widget/index.html',
		       inject:false,
		}),
		new HtmlWebpackPlugin({  
		      filename: './views/star.html',
		      template: 'src/views/star.js',
		      inject:false,
		       chunks: ['vendor', 'index', 'tags']
		}),
		new HtmlWebpackPlugin({  
		      filename: './widget/star.html',
		      template: 'src/widget/star.html',
		       inject:false,
		}),
		new Manifest({
	        cache: [
	          '../public/css/vendor.css',
	          '../public/pages/common/vendor.js',
	          '../public/pages/index.js',
	          '../public/pages/tags.js'
	        ],
	        //Add time in comments. 
	        timestamp: true,
	        // 生成的文件名字，选填 
	        // The generated file name, optional. 
	        filename:'cache.manifest', 
	        // 注意*星号前面用空格隔开 
	        network: [
	          '*'
	        ],

	        headcomment: "test", 
	        master: ['../views/template.html']
	    })


	  ]
};