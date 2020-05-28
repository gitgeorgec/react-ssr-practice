const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
	// Infrom webpack that we're building a bundle for node, rather than for the browser.
	target: 'node',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config);
