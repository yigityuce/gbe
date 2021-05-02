import path from 'path';
import { Configuration } from 'webpack';
const nodeExternals = require('webpack-node-externals');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config: Configuration = {
	mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
	entry: {
		server: path.resolve(__dirname, 'src/main.ts'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
	},
	target: 'node',
	devtool: 'inline-source-map',
	externals: [nodeExternals()],
	resolve: {
		plugins: [new TsconfigPathsPlugin()],
		extensions: ['.ts', '.js', '.json'],
	},
	optimization: {
		minimize: false,
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)$/,
				exclude: /node_modules/,
				use: 'ts-loader',
			},
		],
	},
};

export default config;
