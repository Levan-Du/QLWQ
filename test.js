var path = require('path'),
    fs = require('fs'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var pages = fs.readdirSync(path.join(__dirname, 'src/assets/games')),
    entrys = {},
    plugins = [];

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

console.log(pages, entrys, plugins);
