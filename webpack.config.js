const path = require('path');

module.exports = {
    entry: [
        './app.js'
    ],
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'production',
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
            },
            {
                test: /\.tsx?$/, 
                use: [
                    { loader: "ts-loader" },
                ],
                exclude: /node_modules/,
            }
        ]
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
}