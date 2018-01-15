module.exports = {
    entry: {
        main: './vue/app.js'
    },
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue'
        }]
    }
}