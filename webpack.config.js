const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output : {
        filename : 'main.js',
        path : path.resolve(__dirname,'dist'),
    },
    devtool:'inline-source-map',
    devServer:{
        static:'./dist',
    },
    module:{
        rules : [
            {
                test : /\.css$/i,
                use: ['style-loader','css-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'Todo App',
            template:'./src/index.html'
        }),
    ],
    output : {
        filename: '[name].js',
        path:path.resolve(__dirname,'dist'),
        clean:true,
    }
};