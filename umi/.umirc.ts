import { defineConfig } from 'umi';
import {name} from './package.json'
console.log(name)
export default defineConfig({
  base: name,
  devServer: {
    port: 8002
  },
  publicPath: '/umi/',
  outputPath: './dist/umi',
  mountElementId: 'umi',
  nodeModulesTransform: {
    type: 'none',
  },
  externals: {
    "antd": "window.antd",
  },
  qiankun: {
    slave: {},
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
