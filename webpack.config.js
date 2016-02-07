module.exports = {
	entry: ['./src/js/app.jsx'],
	output: {
		filename: './dist/bundle.js'
	},
	module: {
		preLoaders: [
			{
				test: [/\.js$/, /\.jsx$/],
				exclude: /node_modules/,
				loader: 'eslint-loader'
			}
		],
		loaders: [
			{
				test: [/\.js$/, /\.jsx$/],
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	watch: true
}