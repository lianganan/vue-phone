<template>
  <div class="shouye">
    <div class="navbar">
      <nav>
        <p
          v-for="(item,$index) in arr"
          @click="toggle($index)"
          :class="{active:$index==active}"
          :key="$index"
        >{{item}}</p>
      </nav>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      arr: [
        "新闻",
        "视频",
        "社会",
        "军事",
        "军事1",
        "军事2",
        "军事3",
        "军事4",
        "军事4",
        "军事4",
        "军事4",
        "军事4",
        "军事4",
        "军事4",
        "军事4",
        "军事4"
      ]
    };
  },
  created() {
    if (this.active == 0) {
      this.$router.push({ path: "tuijian" });
    }
  },
  methods: {
    toggle(index) {
      this.active = index;
      console.log(index);
    }
  }
};
</script>
<style lang="less" scoped>
.shouye {
  height: 100%;
  .navbar {
    nav {
      padding: 0 10px;
      height: 99px;
      line-height: 99px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: middle;
      -ms-flex-align: middle;
      align-items: middle;
      overflow: auto;
      p {
        display: block;
        text-align: center;
        font-size: 34px;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        padding: 10px;
        margin: 5px;
        color: #aaa9ba;
      }
      p.active {
        font-size: 50px;
        color: #000;
        background: url("../assets/img/title_picture.png");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center bottom;
      }
    }
    nav::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
