<template>
  <div id="app">
    <h2>Vue2</h2>
    <ul>
      <li><router-link :to="{path: '/foo'}">foo</router-link></li>
      <li><router-link :to="{path: 'bar'}">bar</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  },
};
</script>

<style>
body{
  background: pink;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
li{
  list-style: none;
}
</style>
