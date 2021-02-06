const path = require("path");
const {merge} = require("webpack-merge");
const baseConfig = require("./webpack.base");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
});

const config = {
    mode: 'development',
    entry: './client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            // Images
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            // Fonts and SVGs
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ]
    },
    plugins: [htmlPlugin]
}

module.exports = merge(baseConfig, config);
