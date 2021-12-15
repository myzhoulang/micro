const {
  getWebpackPlugin,
  appendWebpackPlugin,
  editWebpackPlugin,
  replaceWebpackPlugin,
  removeWebpackPlugin,
} = require('@rescripts/utilities');
const { JsxFlags } = require('typescript');
const webpack = require('webpack')
const { name } = require('./package');

module.exports = {
  webpack: (config) => {
    // config.output.library = `${name}-[name]`;
    // config.output.libraryTarget = 'umd';
    // config.output.jsonpFunction = `webpackJsonp_${name}`;
    // config.output.globalObject = 'window';

    config.externals = {
      antd: 'window.antd', 
      'react': 'React',
      'react-dom': 'ReactDOM'
    }
  
    // const a = editWebpackPlugin((p) => {
    //   console.log(p)
    //   sxFlags.dd
    //   return p
    // },'DefinePlugin', config)
    // return a;
    return config
  },

  // devServer: (_) => {
  //   const config = _;

  //   config.headers = {
  //     'Access-Control-Allow-Origin': '*',
  //   };
  //   config.historyApiFallback = true;
  //   config.hot = false;
  //   config.watchContentBase = false;
  //   config.liveReload = false;

  //   return config;
  // },
};