const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')

/* lOADERS */

const rulesForCSS = {
  test: /\.css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: 'css-loader'
    },
    {
      loader: 'postcss-loader',
      options:{
        postcssOptions:{
          ident: 'postcss',
          plugins:[
            require('tailwindcss'),
            require('autoprefixer')
          ]
        }
      }
    }
  ]
}

const rulesForJavascript = {
  test: /\.m?js$/,
  exclude: /(node_modules|bower_components)/, 
  loader: 'babel-loader',
  options:{
    presets: [
      [
        '@babel/preset-env',
        {
          "targets": "defaults"
        }
      ],
      [
        '@babel/preset-react',
        {
          runtime: 'automatic' 
        }
      ]  
    ]
  }
}

const rules = [rulesForJavascript, rulesForCSS]

/* PLUGINS */

module.exports = (env, argv) => {
  
  const {mode} = argv;
  const isProduction = mode === 'production';
  return{
    entry: './src/frontend/index.js',
    output:{
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build')
    },
    plugins:[
      new HtmlWebpackPlugin({
        template: 'src/frontend/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: '[name].bundle.css',
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    module:{
      rules
    },
    devServer: {
      open: true,
      port: 9000,
      overlay: true,
      hot: true
    }

  }

}