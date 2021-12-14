<template>
  <div class="hello">
    <h1>Bar</h1>
    <button @click="$store.commit('increment')">add</button>
    <p>age: {{age}}</p>
  </div>
</template>

<script>
import {mapState } from 'vuex'
export default {
  name: "Bar",
  props: {
    msg: String,
  },
  computed: mapState(['age']),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
