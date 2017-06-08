const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

let config = {
	entry: ['./src/index.js'],
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: ExtractTextWebpackPlugin.extract({
					use: ['css-loader', 'sass-loader'],
					fallback: 'style-loader'
				})
			},
		]
	},
	plugins: [
		new ExtractTextWebpackPlugin('style.css'),
	],
	devServer: {
		contentBase: path.resolve(__dirname, './public'),
		historyApiFallback: true,
		inline: true,
		open: true
	},
	devtool: 'eval-source-map'
}

module.exports = config;
