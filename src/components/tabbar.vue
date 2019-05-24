<template>
  <div class="page-tabbar">
    <div class="tabbar-item borderNone" @click="toSy">
      <img :src="sySrc" alt>
      <p>首页</p>
    </div>
    <div class="tabbar-item borderNone" @click="toFx">
      <img :src="fxSrc" alt>
      <p>分享</p>
    </div>
    <div class="tabbar-item borderNone" @click="toGwc">
      <img :src="gwcSrc" alt>
      <p>购物车</p>
    </div>
    <div class="tabbar-item" @click="toMy">
      <img :src="mySrc" alt>
      <p>我的</p>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "page-tabbar",
  data() {
    return {
      sySrc: require("../assets/img/index2.png"),
      fxSrc: require("../assets/img/share.png"),
      gwcSrc: require("../assets/img/shop_cart.png"),
      mySrc: require("../assets/img/my.png")
    };
  },
  methods: {
    toSy() {
      this.$router.push("/shouye");
      this.sySrc = require("../assets/img/index2.png");
      this.fxSrc = require("../assets/img/share.png");
      this.gwcSrc = require("../assets/img/shop_cart.png");
      this.mySrc = require("../assets/img/my.png");
    },
    toFx() {
      this.$router.push("/fx");
      this.sySrc = require("../assets/img/index.png");
      this.fxSrc = require("../assets/img/share2.png");
      this.gwcSrc = require("../assets/img/shop_cart.png");
      this.mySrc = require("../assets/img/my.png");
    },
    toGwc() {
      this.$router.push("/gwc");
      this.sySrc = require("../assets/img/index.png");
      this.fxSrc = require("../assets/img/share.png");
      this.gwcSrc = require("../assets/img/shop_cart2.png");
      this.mySrc = require("../assets/img/my.png");
    },
    toMy() {
      this.$router.push("/my");
      this.sySrc = require("../assets/img/index.png");
      this.fxSrc = require("../assets/img/share.png");
      this.gwcSrc = require("../assets/img/shop_cart.png");
      this.mySrc = require("../assets/img/my2.png");
    }
  }
};
</script>
 
<style scope lang="less">
.page-tabbar {
  width: 100%;
  height: 110px;
  background: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .tabbar-item {
    box-sizing: border-box;
    width: 40%;
    text-align: center;
    font-size: 20px;
    img {
      width: 50px;
    }
  }
  .borderNone {
    border-right: none;
  }
}
</style>