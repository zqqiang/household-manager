const path = require('path');

module.exports = {
    entry: [
        './react/main.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'react')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }
        }]
    }
};