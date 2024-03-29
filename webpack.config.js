const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // The entry file(s) by default it points to the index typescript file
  entry: './src/index.ts',

  // Module loaders
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            // transpileOnly: true, // If set to true, compile speed is faster but type compile-time checking is disabled
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.html?$/i,
        loader: 'html-loader',
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]'
        }
      },
    ],
  },

  plugins: [
    // The index page
    new HtmlWebpackPlugin({
      template: 'src/index.htm',
      title: 'Modern Browser App',
      meta: {
        'utf-8': {charset: 'utf-8'},
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        description: "Modern browser app boiler plate with webpack.",
      },
      inject: 'body'
    }),

    // Copy files from the public directory to the build directory
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "public"), to: "" },
      ],
    }),

    // Extract css from js files to optimze the output
    new MiniCssExtractPlugin()
  ],

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },

  devServer: {
    contentBase: './dist', // If you update this ensure you update the output path
    hot: false,
    watchContentBase: true,
    liveReload: true,
    port: 8080,
    historyApiFallback: true, // Set to false to disable url rewrites
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxSize: 1024 * 100,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
   },
  },
};