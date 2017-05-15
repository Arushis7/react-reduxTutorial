/**
 * Created by arushi on 2/5/17.
 */

const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry:'./src/app-1.js',
    output:{

       filename:'bundle.js'
    },
    module:{
        rules:[
            {
            test:/\.js$/,
            loader :'babel-loader',
            exclude:/node_modules/

        }]
    },
    devServer:{
        contentBase:'./src',
        port:9000,
        historyApiFallback:true
    }
}