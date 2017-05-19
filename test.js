var path = require('path'),
    fs = require('fs'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


var pages = fs.readdirSync(path.join(__dirname, 'src/pages'));

console.log(pages);
