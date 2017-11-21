const path = require('path')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = merge(common, {
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        historyApiFallback: true
    },
    plugins: [
        new DashboardPlugin()
    ]
});