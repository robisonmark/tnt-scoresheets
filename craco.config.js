/* eslint-disable no-undef */
/* craco.config.js */
const path = require("path");

module.exports = {
    devServer: {
        port: 3001
    },
    alias: {
        'API': path.resolve(__dirname, "./src/sevices/api/"),
    },
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ],
      },
    style: {
        sass: {
            loaderOptions: { /* Any sass-loader configuration options: https://github.com/webpack-contrib/sass-loader. */ },
            // loaderOptions: (sassLoaderOptions, { env, paths }) => { return sassLoaderOptions; }
        },
    },
    webpack: {
        alias: {
            'apI': path.resolve(__dirname, "./src/sevices/api/"),
        },
        configure: { 
            resolve: {
                extensions: [".js", ".json", ".jsx", ".css"],
                alias: {
                    'Api': path.resolve(__dirname, "./src/sevices/api/"),
                },
            },
            /* Any webpack configuration options: https://webpack.js.org/configuration */ 
        },
    },
}