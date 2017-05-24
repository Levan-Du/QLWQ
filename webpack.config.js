var webpack = require('webpack'),
    path = require('path'),
    fs = require('fs'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    TransferWebpackPlugin = require('transfer-webpack-plugin');

var plugins = [];
if (process.env.NODE_ENV === 'production') {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false
            },
            mangle: {
                screw_ie8: true
            }
        })
    );
}

var pages = fs.readdirSync(path.join(__dirname, 'src/pages')),
    entrys = {};

pages.forEach(el => {
    entrys[el] = path.join(__dirname, `src/pages/${el}/index.js`);
    plugins.push(
        new HtmlWebpackPlugin({
            template: 'html-withimg-loader!' + path.join(__dirname, `src/pages/${el}/index.html`),
            filename: el + '.html',
            inject: true,
            chunks: [el, 'vendors']
        })
    );
});

module.exports = {
    entry: entrys,
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
            test: /\.json$/,
            use: 'json-loader'
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader!postcss-loader'
            })
        }, {
            test: /\.(png|jpg|svg)$/,
            exclude: [
                path.join(__dirname, 'src/assets/games'),
                path.join(__dirname, 'src/assets/iconfont')
            ],
            use: 'url-loader?limit=8192&name=/images/[hash:8].[name].[ext]'
        }, {
            test: /\.(eot|svg|woff|ttf|)$/,
            include: [path.join(__dirname, 'src/assets/iconfont')],
            use: 'file-loader?name=/css/iconfont/[name].[ext]'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new ExtractTextPlugin('css/[name].css?[contenthash]'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
            minChunks: 2 // 提取至少2个模块共有的部分
        }),
        new TransferWebpackPlugin([
            { from: 'assets/games', to: 'images' },
            { from: 'commons/vendors', to: 'js' }
        ], path.join(__dirname, 'src'))
    ].concat(plugins),
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8080,
        inline: true
    }
}
