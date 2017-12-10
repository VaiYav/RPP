var path = require('path');
module.exports = {
   resolve: {
      extensions: [".js"],
      modules: [
         "./js",
         "./js/components",
         "./node_modules"
      ]
   },
   entry : ["./scss/main.scss", "./js/app.js"],
   output: {
      path: path.join(__dirname,'public/assets/'),
      publicPath:'assets/',
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
            test: /\.(jpe?g|png|gif)$/i,   //to support eg. background-image property 
            loader:"file-loader",
            query:{
              name:'[name].[ext]',
              outputPath:'images/'
              //the images will be emmited to public/assets/images/ folder 
              //the images will be put in the DOM <style> tag as eg. background: url(assets/images/image.png); 
            }
          },
          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,    //to support @font-face rule 
            loader: "url-loader",
            query:{
              limit:'10000',
              name:'[name].[ext]',
              outputPath:'fonts/'
              //the fonts will be emmited to public/assets/fonts/ folder 
              //the fonts will be put in the DOM <style> tag as eg. @font-face{ src:url(assets/fonts/font.ttf); }  
            }
          },
          {
            test: /\.scss$/,
            loaders: ["style-loader","css-loader","sass-loader"]
          }
         ]
   },
   devtool: "#inline-source-map",
   devServer: {
      open: true,
      historyApiFallback: true
   }
};