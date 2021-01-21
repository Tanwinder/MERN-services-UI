const path = require("path");
const {merge} = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require("./webpack.base");

const config = {
    // Inform webpack that we're building a bundle
    // for nodeJS, rather than for the browser
    mode: 'development',
    target: 'node',

    // Tell webpack the root file of our
    // server application
    entry: './src/server/index.js',

    // Tell webpack where to put the output file
    // that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webpackNodeExternals()] // in order to ignore all modules in node_modules folder
}

module.exports = merge(baseConfig, config);
