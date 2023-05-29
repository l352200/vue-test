<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
// import WebSite from './webSite.vue'

export default {
  name: 'App',
  components: {
    // WebSite
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  
}
html, body {
    padding: 0;
    margin: 0;
    background: rgb(235,238,245);
}
</style>
