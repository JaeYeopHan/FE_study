const path = require("path");

module.exports = {
    entry: "./index.js",
    output: {
        filename: "build/bundle.js"
    },

    resolveLoader: {
        modules: ['node_modules', path.resolve(__dirname, 'loader')],
    },

    module: {
        rules: [
            {
                test: /\.js/,
                use: [
                    'babelLoader'
                ]
            }
        ]
    }
}
