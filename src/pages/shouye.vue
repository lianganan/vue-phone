<template>
  <div class="shouye">
    <div class="navbar">
      <nav>
        <p
          v-for="(item,$index) in arr"
          @click="toggle($index)"
          :class="{active:$index==active}"
          :key="$index"
        >{{item.mTypeName}}</p>
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
        { mTypeName: "推荐" },
        { mTypeName: "保健" },
        { mTypeName: "家电" },
        { mTypeName: "美妆" },
        { mTypeName: "数码" },
        { mTypeName: "更多" },
        { mTypeName: "军事3" },
        { mTypeName: "军事4" },
        { mTypeName: "军事4" },
        { mTypeName: "军事4" },
        { mTypeName: "军事4" },
        { mTypeName: "军事4" },
        { mTypeName: "军事4" },
        { mTypeName: "军事4" },
        { mTypeName: "军事4" },
        { mTypeName: "军事4" }
      ]
    };
  },
  created() {
    if (this.active == 0) {
      this.$router.push({ path: "recommend" });
    }
    // this.$axios.post('/getServiceType',{}).then(res=>{
    //   console.log(res);
    //   this.arr = res.data.data
    //   this.arr.unshift({mTypeName:'推荐'})
    // })
  },
  methods: {
    toggle(index) {
      this.active = index;
      console.log(index);
      if (this.active == 0) {
        this.$router.push({ path: "recommend" });
      }
      if (this.active == 1) {
        this.$router.push({ path: "healthcare" });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.shouye {
  height: 100%;
  .navbar {
    background-color: rgba(255, 255, 255, 1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    padding-bottom: 10px;
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
        background-size: 20%;
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
