const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: {
    main: "./src/main.js",
  },
  mode: "production",
  output: {
    filename: "[name].bundle.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif|ico)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "img",
            esModule: false
          }
        }
      },
      {
        test: /\.(ttf|otf|woff)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts",
          }
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "src/index.html" }),
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    new CleanWebpackPlugin(),
  ]
}
