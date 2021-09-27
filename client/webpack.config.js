const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: ['./src/javascripts/index.js','./src/scss/base.scss'],
    output: {
        filename: "bundle.js",
        path: path.resolve("../server/public/"),
        publicPath: '/'
    },
    module : {
        rules : [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                                name: '[name].[ext]',
                            }
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },
        ],
    },
    mode: 'none',
    devtool: 'source-map',
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new MiniCssExtractPlugin({ filename: 'base.css' })],
}