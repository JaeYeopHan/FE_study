const webpack = require("webpack");

module.exports = ({dev = false} = {}) => ({
    entry: "./src/index.js",

    output: {
        filename: "dist/bundle.js"
    },

    module: {
		rules: [
			// babel
			{
				test: /\.js$/,
				exclude: /(node_modules|build)/,
				loader: "babel-loader",
			},

			// ESLint
			{
				test: /\.js$/,
				exclude: /(node_modules|dist|build)/,
				enforce: "pre",
				use: [{loader: "eslint-loader"}],
			},
		],
    },

    devtool: dev ? "cheap-module-source-map" : "source-map",

    devServer: {
		host: "localhost",
		// port: ,
		disableHostCheck: true,
		inline: true
	},

    externals: {    // output bundle에서 의존을 제거할 요소
        jquery: "jQuery" // 글로벌 변수에서 해당 모듈을 참조
    },

	plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
        }),
        new SauHtmlWebpackPlugin({
            src: {
                test: "*.html", // 타겟 파일 (minimatch) : (*.html - src 루트에 있는 html 파일)
                cwd: "src" // (optional) 기준 디렉토리
            },
    
            // (optional) template processing 결과 페이지 - 가이드 페이지
            reporter: {
                test: "sau-guide.ejs", // 타겟 파일 (minimatch)
                assetNameFilter: (srcFileName) => "index.html", // (optional) output 파일 이름
                templateData: {
                    project: {
                        name: "",
                        type: ""
                    }
                }
            }
        })
	],
});