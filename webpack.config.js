const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: {
        index:  ['./src/javascript/index.js'],
        portfolio: ['./src/javascript/portfolio.js']
    },
    devServer: {
        static: './src',
    },
    output: {
        path: path.resolve(__dirname, './docs'),
        chunkFilename: "[name].[contenthash].js",
        filename: '[name].[contenthash].js'
    },

    module: {
        rules : [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader"
                ],
            },
            {
                test : /\.(js)$/, 
                use:'babel-loader'
            },
        ]
    },
    optimization: {
        runtimeChunk: 'single',
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    format: {
                        comments: false,
                    }
                },
            })
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html", filename: 'index.html', chunks:['index'] }),
        new HtmlWebpackPlugin({ template: "./src/portfolio.html", filename: 'portfolio.html', chunks:['portfolio'] }),
        new MiniCssExtractPlugin({filename:"[name].[contenthash].css"}),
    ],
}