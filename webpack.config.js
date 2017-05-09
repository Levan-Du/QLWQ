var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: path.join(__dirname, 'src/pages/index/index.js'),
        games: path.join(__dirname, 'src/pages/games/index.js'),
        news: path.join(__dirname, 'src/pages/news/index.js'),
        mall: path.join(__dirname, 'src/pages/mall/index.js'),
        user: path.join(__dirname, 'src/pages/user/index.js')

    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader!postcss-loader'
            })
        }, {
            test: /\.(png|jpg|svg)$/,
            use: 'url-loader?limit=8192&name=/images/[hash:8].[name].[ext]'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
            minChunks: 2 // 提取至少2个模块共有的部分
        }),
        new ExtractTextPlugin('css/[name].css?[contenthash]'),
        new HtmlWebpackPlugin({
            template: 'html-withimg-loader!' + path.join(__dirname, 'src/pages/index/index.html'),
            filename: 'index.html',
            inject: true,
            chunks: ['index', 'vendors']
        }),
        new HtmlWebpackPlugin({
            template: 'html-withimg-loader!' + path.join(__dirname, 'src/pages/news/index.html'),
            filename: 'news.html',
            inject: true,
            chunks: ['news', 'vendors']
        }),
        new HtmlWebpackPlugin({
            template: 'html-withimg-loader!' + path.join(__dirname, 'src/pages/games/index.html'),
            filename: 'games.html',
            inject: true,
            chunks: ['games', 'vendors']
        }),
        new HtmlWebpackPlugin({
            template: 'html-withimg-loader!' + path.join(__dirname, 'src/pages/mall/index.html'),
            filename: 'mall.html',
            inject: true,
            chunks: ['mall', 'vendors']
        }),
        new HtmlWebpackPlugin({
            template: 'html-withimg-loader!' + path.join(__dirname, 'src/pages/user/index.html'),
            filename: 'user.html',
            inject: true,
            chunks: ['user', 'vendors']
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8080,
        inline: true
    }
}
