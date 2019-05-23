<template>
  <div class="page-tabbar">
    <div class="tabbar-item borderNone" @click="toSy">首页</div>
    <div class="tabbar-item borderNone" @click="toFx">分享</div>
    <div class="tabbar-item borderNone" @click="toGwc">购物车</div>
    <div class="tabbar-item" @click="toMy">我的</div>
  </div>
</template>
 
<script>
export default {
  name: "page-tabbar",
  data() {
    return {
      selected: "外卖"
    };
  },
  methods: {
    toSy() {
      this.$router.push("/shouye");
    },
    toFx() {
      this.$router.push("/fx");
    },
    toGwc() {
      this.$router.push("/gwc");
    },
    toMy() {
      this.$router.push("/my");
    }
  }
};
</script>
 
<style scope lang="less">
.page-tabbar {
  width: 100%;
  height: 86px;
  background: red;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  .tabbar-item {
    box-sizing: border-box;
    border: 1px solid #000;
    width: 40%;
    text-align: center;
    line-height: 86px;
    font-size: 16px; /*no*/
  }
  .borderNone {
    border-right: none;
  }
}
</style>