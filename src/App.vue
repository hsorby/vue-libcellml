<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloLibCellML msg="Welcome to Your Vue.js App with libCellML" />
  </div>
</template>

<script>
import HelloLibCellML from "./components/HelloLibCellML.vue";

export default {
  name: "App",
  components: {
    HelloLibCellML,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
