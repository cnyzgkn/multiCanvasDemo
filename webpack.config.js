
module.exports = {
    // 表示入口文件
    entry: {
        index: "./public/src/component/index.jsx"
	},
    // 表示输出文件
    output: {
        path: "./public/build",
        filename: "[name].js"
    },
	resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
			{
                test: /\.jsx$/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
    }
};
