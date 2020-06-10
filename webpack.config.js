const path = require('path');
const friendlyFormatter = require('eslint-friendly-formatter');

module.exports = {
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js|vue$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    formatter: friendlyFormatter,
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.vue', '.scss'],
        alias: {
            '@': path.join(__dirname, '/src'),
        },
    },
};
