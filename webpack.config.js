const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
	mode: 'development',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					transpileOnly: true,
				},
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
						},
					},
				],
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				type: 'asset',
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
	},
	plugins: [new HtmlWebpackPlugin({ title: 'Canvas' }), new MiniCssExtractPlugin()],
	cache: { type: 'filesystem' },
};
