var htmlwebpackplugin = require("html-webpack-plugin");
var minicssextractliugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');
module.exports = {
    mode : "development",

    devServer: {
        static: {
          directory: path.join(__dirname, '/dist'),
        },
        devMiddleware: {
          writeToDisk: true,
      },
        compress: true,
        port: 9000,
        hot: false,
        liveReload: true,
        open: true,
        allowedHosts: "all"
      },

    module: {
        rules: [
          {
            test: /\.html$/i,
            use:[{
                loader: "html-loader",
                options:{
                    minimize: true,
                },
            }],
        
        },   
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
                {
                  loader: minicssextractliugin.loader, 
                  options: {
                    publicPath: '../' 
                  }
                },
                'css-loader',
                'sass-loader'
              ]
        },
          {
            test: require.resolve("jquery"),
            loader: "expose-loader",
            options: {
              exposes: ["$", "jQuery"],
            },
          },
          
        ],
      },

      plugins:[
        new htmlwebpackplugin ({
            filename :"index.html",
            template : "./src/index.html",
        }),

        new htmlwebpackplugin ({
          filename :"product.html",
          template : "./src/product.html",
        }),
        new htmlwebpackplugin ({
         filename :"checkout.html",
         template : "./src/checkout.html",
        }),
        new htmlwebpackplugin ({
         filename :"payment.html",
         template : "./src/payment.html",
        }),
        new htmlwebpackplugin ({
          filename :"search.html",
          template : "./src/search.html",
         }),
         new htmlwebpackplugin ({
          filename :"contact.html",
          template : "./src/contact.html",
         }),
        new minicssextractliugin({
            filename: "css/style.css"
        }),
        new OptimizeCSSAssetsPlugin({}),

        new minicssextractliugin({filename: "css/style.css"}),
        new OptimizeCSSAssetsPlugin({}),
    ],
};