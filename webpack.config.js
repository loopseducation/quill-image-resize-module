const path = require('path');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
    entry: "./src/ImageResize.js",
    output: {
        path: __dirname,
        library: 'ImageResize',
        libraryTarget: 'umd',
        filename: "image-resize.min.js",
    },
    mode,
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env'],
                    },
                }],
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'raw-loader',
                }],
            },
        ],
    },
};
