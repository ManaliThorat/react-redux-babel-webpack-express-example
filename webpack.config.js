const webpack = require('webpack');
let nodeExternals = require('webpack-node-externals');
let path = require('path');

module.exports = [
    {
    entry: './server.js',
    output: {
        path: path.join(__dirname, '/'),
        filename: 'server.bundle.js',
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }]
    },
    target: 'node',
    externals: [nodeExternals()]

    },
    {
        entry: './index.js',
        output: {
            path: path.join(__dirname, '/bin'),
            filename: 'app.bundle.js',
        },
        module: {
            loaders: [{
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            }]
        }
    }
]
