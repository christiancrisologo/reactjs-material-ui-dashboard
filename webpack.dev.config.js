
const webpack = require('webpack');
const path = require('path');
const DIST_FOLDER = path.resolve('dist');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {

    entry: ['./src/index.js'],

    output: {
        path: DIST_FOLDER,
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        contentBase: DIST_FOLDER,
        hot: true, // Live-reload
        inline: true,
        port: 8080,
        host: 'localhost'
    },
    devtool: 'eval',
    plugins: [
        // Enables Hot Modules Replacement
        new webpack.HotModuleReplacementPlugin(),
        // Allows error warnings but does not stop compiling. 
        new webpack.NoErrorsPlugin(),
        // Transfer Files
 
        new TransferWebpackPlugin([
            { from: "www", to: '../dist' }
        ],path.join(__dirname, 'src'))
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loaders: [  "babel-loader"]
            },
            {
                test: /\.json?$/,
                exclude: /node_modules/,
                loader: "json-loader"
            },
            {
                test: /\.css?$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!autoprefixer-loader"
            },
            {
                test: /\.scss?$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
            }
        ]
    }
}
