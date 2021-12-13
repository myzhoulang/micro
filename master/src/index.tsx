import React from 'react';
import ReactDOM from 'react-dom';
import {registerMicroApps, start} from 'qiankun'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
		<h2>主应用</h2>
    <ul>
			<li><a href="/vue2">Vue2</a></li>
			<li><a href="/umi">umi</a></li>
    </ul>
		<div id="container"></div>
  </React.StrictMode>,
  document.getElementById('root')
);

// 注册
registerMicroApps([
    {
        name: 'umiApp',
        entry: '//localhost:8000',
        container: '#container',
        activeRule: '/umi',
    },
    {
        name: 'vue2',
        entry: '//localhost:8081',
        container: '#container',
        activeRule: '/vue2',
    },
])

start()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
