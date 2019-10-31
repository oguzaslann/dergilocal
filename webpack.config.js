const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: [
        './web/index.js',
    ],
    module: {
        rules: [
            {
                test    : /\.js$/,
                exclude : /node_modules/,
                use     :{
                   loader    : "babel-loader",
                   options   : {
                        "presets": [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                 }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }

        ]
    },
    devServer: {
        contentBase: './web',
        hot: true
      },
    output: { 
        path: path.resolve(__dirname, './web'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        mainFiles: ['index.web.js','index.js']
      }
}