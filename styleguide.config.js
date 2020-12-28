const path = require('path');
module.exports = {
  title: 'UI-Nature',
  ignore: [
    './src/components/index.js',
    './src/components/Icon/Icons/*.js',
    './src/components/theme.js'],
  components: './src/components/**/*.js',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "resolve-url-loader", "sass-loader"],
        },
        {
          test: /\.(woff|woff2|ttf|eot)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: './src/components/Fonts'
          }      
        },
        {
          test: /\.css$/,
          use: ["raw-loader"],
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader'
        }
      ]
    },
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname,'./src/ThemeProvide.js')
  },
}