import { defineConfig } from 'umi';
import { name } from './package.json';
import BundleAnalyzerPlugin from 'webpack-bundle-analyzer'

console.log(name);
export default defineConfig({
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    // // 设置 alias
    // memo.resolve.alias.set('foo', '/tmp/a/b/foo');

    // // 删除 umi 内置插件
    // memo.plugins.delete('progress');
    // memo.plugins.delete('friendly-error');
    // memo.plugins.delete('copy');
    memo.plugin('bundle-analyzer').use(BundleAnalyzerPlugin.BundleAnalyzerPlugin)
  },
  base: name,
  devServer: {
    port: 8002,
  },
  publicPath: '/',
  outputPath: './dist',
  mountElementId: 'umi',
  nodeModulesTransform: {
    type: 'none',
  },
  externals: {
    moment: 'moment',
    antd: 'antd', 
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  qiankun: {
    slave: {},
  },
  antd: false,
  request: false,
  analytics:false,
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
