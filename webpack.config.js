const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/js/app.js',

    output: {
        path: 'docs',
        filename: 'client.bundle.js'
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(ico|jpg|png|ttf|eot|svg|woff(2)?)(\?v=.+)?$/,
                loader: 'file'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            filename: 'index.html'
        })
    ]
};