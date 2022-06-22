module.exports = {
	
	entry: './src/index.ts',
	
	module: {rules: [{test: /\.ts$/, use: 'ts-loader'}]},
	resolve: {extensions: ['.ts', '.js']},
	
	plugins: [],
	
	watchOptions: {ignored: /node_modules/},
	
};


