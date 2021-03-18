const path = require('path');

module.exports = {
    entry: [
        './app.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ] 
            },
            {
                test: /\.scss$/, 
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ] 
            }
        ]
    }
}