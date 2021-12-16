import { defineConfig } from 'umi';
import { name } from './package.json';
import path from 'path'

console.log(name);
export default defineConfig({
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
