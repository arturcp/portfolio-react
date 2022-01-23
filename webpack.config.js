const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
  favicon: "./src/assets/images/favicon-32x32.png"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
         test: /\.(eot|woff|woff2|ttf|svg)$/,
         use: [
           {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
           }
         ]
       }
    ]
  },
  plugins: [htmlPlugin]
};
