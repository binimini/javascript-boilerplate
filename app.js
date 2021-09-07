const path = require('path');
const express = require('express');
const app = express();

const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackConfig = require("./webpack.config.js");
const compiler = webpack(webpackConfig);

app.use(express.static('public'));
app.use(express.json()); 
app.use(express.urlencoded({ extended : true})) 

app.use('/', webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath
    })
);

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`listening on port ${process.env.PORT || 3000}...`);
})