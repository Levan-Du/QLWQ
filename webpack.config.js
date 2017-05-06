var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: path.join(__dirname, 'src/pages/index.js'),
        games: path.join(__dirname, 'src/pages/index.js')
    },
    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.css$/,
            use: {
                fallback: 'style-loader',
                use: 'css-loader!postcss-loader'
            }
        }]
    },
    plugins: [
        new webpack.providePlugin({
            $: 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/pages/index/index.html'),
            filename: 'index.html',
            inject: true,
            chunks: ['index', 'venders']
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8080,
        inline: true
    }
}
