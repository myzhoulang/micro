import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import App from './App.vue';
import routes from './routes';
import initStore from './store';
import { init } from './actions';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

console.log('>>>', window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__);

let router = null;
let instance = null;
let store = {};

function render(props = {}) {
  console.log(window.__POWERED_BY_QIANKUN__);

  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/cvue2' : '/',
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] mount', props);
  init(props);
  store = initStore(props.state);
  console.log(store);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
