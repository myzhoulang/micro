# 微前端

## 解决什么问题
* 解耦  
  > 大型项目拆分成小项目，各个模块被当成小项目被单独开发、维护、发布。每一个模块之间互不影响。体现在
  > 1. 无需为了维护或开发一个模块而需要启动整个项目
  > 2. 当一个模块遇到致命错误的时候，不会影响到其他模块的正常运行
  > 3. 当修改了一个模块上线，无需重新打包构建部署整个项目
* 老项目整合
  > 对于将一些历史项目整合到新的系统时，鉴于技术栈， 不好整合，需要兼容。
## 使用微前端需要做哪些
* 能兼容现有项目
* [样式、脚本、DOM 隔离](https://juejin.cn/post/6955342295998660615)
  > ![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/392e99d9980e47f19f578b2a12dcca1c~tplv-k3u1fbpfcp-watermark.awebp)
* 各应用之间相互通信
  * Actions 通信 (观察者模式)
  * Shared 通信  (主应用维护状态池， 将实例共享给子应用， 子应用本身也有一个实例，用于单独访问的时候使用)
* 各应用具有各自的生命周期
* 父组件传递数据到子组件
* 公共依赖提取(第三方库以及自定义公共模块)
  * 第三方库 webpack externals + ignore 属性

## 有哪些解决方案

* iframe
* Web-component
* [蚂蚁乾坤](https://qiankun.umijs.org/) 
  > 基于url的变化，拦截url, 通过获取对应子应用的 html 内容。解析 html 内容，收集子应用的样式、js 脚本，安装样式并执行 js 脚本来获取子应用的生命周期方法，然后执行子应用的 mount 方法。
* [京东micro-app](https://github.com/micro-zoe/micro-app/blob/dev/README.zh-cn.md)
* [single-sap](https://single-spa.js.org/)

## 构建部署
* nginx 转发
* docker 镜像

## 其他
[官网常见问题](https://qiankun.umijs.org/zh/faq)


