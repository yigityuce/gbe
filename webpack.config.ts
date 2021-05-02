import path from 'path';
import { Configuration } from 'webpack';
const nodeExternals = require('webpack-node-externals');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config: Configuration = {
	mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
	entry: {
		server: path.resolve(__dirname, 'src/server.ts'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'server.js',
	},
	target: 'node',
	devtool: 'inline-source-map',
	externals: [nodeExternals()],
	resolve: {
		plugins: [new TsconfigPathsPlugin()],
		extensions: ['.ts', '.js', '.json'],
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
