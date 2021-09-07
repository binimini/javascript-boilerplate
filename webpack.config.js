const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill','./src/javascripts/index.js','./src/scss/base.scss'],
    output: {
        filename: "bundle.js",
        path: path.resolve("public/"),
        publicPath: '/'
    },
    module : {
        rules : [
            {
                test: /\.scss$/,
                use : ['style-loader', 'css-loader', 'sass-loader'] 
            }
        ]
    },
    mode: 'none',
    devtool: 'source-map',
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
}