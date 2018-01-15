module.exports = {
    entry: {
        main: './vue/app.js'
    },
    output: {
        filename: './vue/bundle.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
}