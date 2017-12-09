const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});
module.exports = {
   resolve: {
      extensions: [".js"],
      modules: [
         "./js",
         "./js/controllers",
         "./node_modules"
      ]
   },
   entry : ["./js/app.js"],
   output: {
      filename: "./bundle.js"
   },
   module: {
      rules: [ 
         {
            test: /\.js$/,
            loader: "babel-loader",
            exclude: [ /node_modules/ ],
            options: {
               presets: [ "env" ]
            }
         },
          {
              test: /\.scss$/,
              use: [{
                  loader: "style-loader"
              }, {
                  loader: "css-loader"
              }, {
                  loader: "sass-loader",
                  options: {
                      includePaths: ["absolute/path/a", "absolute/path/b"]
                  }
              }]
          }
         // {test: /\.css$/, loader: "style-loader!css-loader"},
         // { test: /\.html$/, loader: "html" }
      ],
      // loaders: [
      //     {
      //       test: /\.js$/,
      //       exclude: /node_modules/,
      //       loader: 'babel-loader',
      //   },
      //   { test: /\.html$/, loader: "html" },
      //   { test: /\.css$/, loader: "style!css" }
      // ]
   },
    plugins: [
        extractSass
    ],
   devtool: "#inline-source-map",
   devServer: {
      open: true,
      historyApiFallback: true
   }
};