var webpack = require('webpack'),
    path = require('path'),
    fs = require('fs'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');


var imgs = fs.readdirSync(path.join(__dirname, 'src/assets/games'));
fs.open(path.join(__dirname, 'src/assets/games/gamesImgs.json'), 'w', function(err, fd) {
    var buf = new Buffer(JSON.stringify(imgs));
    var c = fs.writeSync(fd, buf, 0, buf.length, 0);
})

var plugins = [];
if (process.env.NODE_ENV === 'production') {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
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
            test: /\.(png|jpg|gif)$/,
            include: [path.join(__dirname, 'src/assets/games')],
            use: 'file-loader?name=/images/[name].[ext]'
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
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
            minChunks: 2 // 提取至少2个模块共有的部分
        }),
        new ExtractTextPlugin('css/[name].css?[contenthash]')
    ].concat(plugins),
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8080,
        inline: true
    }
}
