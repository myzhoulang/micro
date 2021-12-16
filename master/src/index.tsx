import React from 'react';
import ReactDOM from 'react-dom';
import {
  registerMicroApps,
  start,
  addGlobalUncaughtErrorHandler,
} from 'qiankun';
import actions, { state } from './store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

console.log(process.env);
// @ts-ignore
window.b = 123;

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <h2>主应用</h2>
    <ul>
      <li>
        <a href="/vue2">Vue2</a>
      </li>
      <li>
        <a href="/umi">umi</a>
      </li>
    </ul>
    <div id="container"></div> */}

    <button onClick={() => actions.setGlobalState({ age: 61 })}>Change</button>
  </React.StrictMode>,
  document.getElementById('root'),
);

const { NODE_ENV } = process.env;

// const envs = {
//   vue2: {
//     development: {
//       entry:
//     },
//   },
// };

// 注册
registerMicroApps(
  [
    {
      name: 'vue2',
      entry:
        NODE_ENV === 'development'
          ? '//localhost:8001'
          : 'http://localhost:9001/',
      container: '#container',
      activeRule: '/cvue2',
      props: {
        state,
      },
    },

    {
      name: 'umi',
      // entry: 'http://localhost:9002/',
      entry:
        NODE_ENV === 'development'
          ? '//localhost:8002'
          : 'http://localhost:9002/',

      container: '#container',
      activeRule: '/cumi',
      props: {
        state,
      },
    },
  ],
  {
    beforeLoad() {
      console.log('beforeLoad');
      return new Promise((resolve, reject) => {
        // 获取登录信息
        setTimeout(() => {
          resolve(true);
        }, 1000);
      });
    },
    beforeMount() {
      console.log('beforeMount');
      return new Promise((resolve, reject) => {
        // 获取登录信息
        resolve(true);
      });
    },
  },
);

// start({ sandbox: false });
start();

addGlobalUncaughtErrorHandler(function (event) {
  console.log(event);
});

// setDefaultMountApp("/app1");
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
