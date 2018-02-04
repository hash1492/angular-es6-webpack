var webpack = require('webpack');
var path = require('path');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        main: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        // Plugin to uglify bundle.js
        new UglifyJsPlugin(),
        // Plugin to add a banner on top of bundle.js
        new webpack.BannerPlugin("bundle.js V-1.0.0")
      ]
}