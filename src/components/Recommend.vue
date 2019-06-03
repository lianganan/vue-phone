<template>
  <div class="main">
    <mt-loadmore
      :top-method="loadTop"
      ref="loadmore"
      style="fontSize:12px;"
    >
      <div class="search">
        <div class="search_input">
          <input type="text" placeholder="保健品">
          <img src="../assets/img/search.png" alt>
        </div>
        <div class="integral_icon">
          <img src="../assets/img/get_integral.png" alt>
        </div>
      </div>
      <div class="rotationChart">
        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <img style="width:100%" src="../../static/img/banner.png" alt>
          </mt-swipe-item>
          <mt-swipe-item>
            <img style="width:100%" src="../../static/img/banner.png" alt>
          </mt-swipe-item>
          <mt-swipe-item>
            <img style="width:100%" src="../../static/img/banner.png" alt>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="theme">
        <img src="../assets/img/label.png" alt>
      </div>
      <div class="navBox">
        <div>
          <img src="../assets/img/toiletries.png" alt>
          <p>服饰</p>
        </div>
        <div>
          <img src="../assets/img/toiletries.png" alt>
          <p>保健</p>
        </div>
        <div>
          <img src="../assets/img/toiletries.png" alt>
          <p>洗护</p>
        </div>
        <div>
          <img src="../assets/img/toiletries.png" alt>
          <p>更多</p>
        </div>
      </div>
      <div class="card">
        <div class="card_top">
          <img src="../assets/img/integral.png" alt>
          <img src="../assets/img/community.png" alt>
        </div>
        <div class="card_bottom">
          <img src="../assets/img/member.png" alt>
        </div>
      </div>
      <div class="shoping">
        <div class="title">
          <p>
            精选商品
            <span>CHOICENESS</span>
          </p>
        </div>
        <div class="shop_content">
          <div class="shop_item">
            <div class="shop_item_img">
              <img src="../assets/img/store_home_goods_forexample_2.png" alt>
            </div>
            <div class="shop_item_details">
              <p class="shop_item_detail">你是睡你再那谁的阿斯顿王企鹅阿斯顿全文热污染飞洒的发色王企鹅</p>
              <p class="price">￥1600</p>
            </div>
          </div>
          <div class="shop_item">
            <div class="shop_item_img">
              <img src="../assets/img/store_home_goods_forexample_2.png" alt>
            </div>
            <div class="shop_item_details">
              <p class="shop_item_detail">你是睡你再那谁</p>
              <p class="price">￥1600</p>
            </div>
          </div>
          <div class="shop_item">
            <div class="shop_item_img">
              <img src="../assets/img/store_home_goods_forexample_2.png" alt>
            </div>
            <div class="shop_item_details">
              <p class="shop_item_detail">你是睡你再那谁</p>
              <p class="price">￥1600</p>
            </div>
          </div>
          <div class="shop_item">
            <div class="shop_item_img">
              <img src="../assets/img/store_home_goods_forexample_2.png" alt>
            </div>
            <div class="shop_item_details">
              <p class="shop_item_detail">你是睡你再那谁</p>
              <p class="price">￥1600</p>
            </div>
          </div>
        </div>
      </div>
    </mt-loadmore>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created () {
    console.log(111);
  },
  methods: {
    loadTop() {
      // 加载更多数据
      this.$refs.loadmore.onTopLoaded();
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  margin-top: 99px;
  margin-bottom: 110px;
  .search {
    background-color: #fff;
    display: flex;
    .search_input {
      position: relative;
      padding: 20px 0 20px 30px;
      input {
        display: block;
        width: 600px;
        height: 60px;
        border: none;
        background-color: #f5f5f5;
        padding: 18px 0 17px 79px;
        font-size: 26px;
        border-radius: 10px;
        color: #b8b8b8;
        line-height: 50px;
      }
      img {
        position: absolute;
        width: 26px;
        height: 27px;
        top: 50%;
        transform: translateY(-50%);
        left: 56.5px;
      }
    }
    .integral_icon {
      position: relative;
      img {
        width: 56px;
        height: 58px;
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 32px;
      }
    }
  }
  .rotationChart {
    height: 250px;
  }
  .theme {
    width: 100%;
    height: 124px;
    line-height: 124px;
    text-align: center;
    background-color: #fff;
    border-bottom: 1px solid #eaeaea;
    img {
      vertical-align: middle;
      width: 645px;
    }
  }
  .navBox {
    height: 261px;
    width: 100%;
    padding: 64px 30px 41px;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    font-size: 24px;
    text-align: center;
    img {
      display: block;
      width: 80px;
      vertical-align: middle;
      margin-bottom: 16px;
    }
  }
  .card {
    background-color: #fff;
    padding: 0 30px 31px;
    .card_top {
      display: flex;
      justify-content: space-around;
      img {
        width: 340px;
        height: 240px;
      }
    }
    .card_bottom {
      margin-top: 12px;
      img {
        width: 690px;
        display: block;
      }
    }
  }
  .shoping {
    padding: 0 30px;
    background-color: #fff;
    .title {
      padding: 29px 0;
      p {
        font-size: 40px;
        span {
          font-size: 24px;
          color: #999;
          margin-left: 19px;
        }
      }
    }
  }
}
</style>

