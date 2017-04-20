
const webpack = require('webpack');
const path = require('path');
const SRC_FOLDER = path.resolve('src');
const DIST_FOLDER = path.resolve('build');
const TransferWebpackPlugin = require('transfer-webpack-plugin'); 
module.exports = {

    entry: ['./src/index.js'],

    output: {
        path: DIST_FOLDER,
        filename: 'bundle.js'
    },

    devtool: 'source-map',
    plugins: [

        // Minify the bundle
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                // suppresses warnings, usually from module minification
                warnings: false,
            },
        }),

        new webpack.NoErrorsPlugin(),

        new TransferWebpackPlugin([
            { from: "www", to: '../build' }
        ], path.join(__dirname, 'src')),
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
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
