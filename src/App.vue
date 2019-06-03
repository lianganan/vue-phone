<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import tabBar from "./components/tabbar";
export default {
  data() {
    return {};
  },
  watch: {
    $route: function(to, from) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>

<style>
#app {
  height: 100%;
}
</style>
