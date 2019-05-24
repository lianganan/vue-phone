<template>
  <div>
    <router-view/>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import tabBar from '../components/tabbar'
export default {
  components:{
    tabBar
  }
}
</script>
<style lang="less" scoped>

</style>
