import React from 'react';
import ReactDOM from 'react-dom';
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';
import actions, { state } from './store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

// 注册
registerMicroApps(
  [
    // {
    //   name: "app1",
    //   entry: "//localhost:8005",
    //   container: "#container",
    //   activeRule: "/app1",
    //   props: {
    //     state,
    //   },
    // },
    {
      name: 'vue2',
      entry: 'http://localhost:9001/',
      // entry: '//localhost:8001',
      container: '#container',
      activeRule: '/cvue2',
      props: {
        state,
      },
    },

    {
      name: 'umi',
      entry: 'http://localhost:9002/',
      // entry: '//localhost:8002',
      container: '#container',
      activeRule: '/cumi',
      props: {
        state,
      },
    },

    // {
    //   name: "app2",
    //   entry: "//localhost:8004",
    //   container: "#container",
    //   activeRule: "/app2",
    //   props: {
    //     state,
    //   },
    // },
    // {
    //   name: "app3",
    //   entry: "//localhost:8003",
    //   container: "#container",
    //   activeRule: "/app3",
    //   props: {
    //     state,
    //   },
    // },
    // {
    //   name: "fina",
    //   entry: "http://dev.geelytravel.cn/tmc/#/financial-center/work-table/list",
    //   container: "#container",
    //   activeRule: "fina",
    // },
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

start();

// setDefaultMountApp("/app1");
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
