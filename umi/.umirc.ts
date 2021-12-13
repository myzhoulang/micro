import { defineConfig } from 'umi';
import {name} from './package.json'
console.log(name)
export default defineConfig({
  base: '/umi',
  publicPath: '/umi/',
  outputPath: './dist/umi',
  mountElementId: 'umi',
  nodeModulesTransform: {
    type: 'none',
  },
  qiankun: {
    slave: {},
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
