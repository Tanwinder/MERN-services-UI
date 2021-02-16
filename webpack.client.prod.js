const path = require("path");
const {merge} = require("webpack-merge");
const baseConfig = require("./webpack.base");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

// const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
});

const config = {
    mode: 'production',
    entry: './client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", 
                    "sass-loader" 
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", 
                    "sass-loader" 
                ]
            }
        ],
    },
    plugins: [
      htmlPlugin,
      // Extracts CSS into separate files
      // Note: style-loader is for development, MiniCssExtractPlugin is for production
    //   new CleanWebpackPlugin(['dist/css','dist/js']),
      new MiniCssExtractPlugin({               
          filename: "css/[name].css"
      })
    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
}

module.exports = merge(baseConfig, config);
