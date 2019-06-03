<template>
  <div class="my">
    <div class="my_header">
      <div class="my_header_set">
        <img src="../assets/img/my_message.png" alt>
        <img src="../assets/img/setting.png" alt>
      </div>
      <div class="my_info">
        <div class="my_logo">
          <img src="../assets/img/defulLogo.png" alt>
        </div>
        <div class="my_nick">
          <p>
            昵称
            <span>vip1</span>
            <i></i>
          </p>
          <p>ID</p>
        </div>
      </div>
      <div class="my_vip">
        <img src="../assets/img/VIPicon.png">
        <span>升级会员，享受更多特权！</span>
        <div>会员权益</div>
      </div>
    </div>
    <div class="order_friend">
      <div class="order_friend_conten">
        <div class="conten_left">
          <img src="../assets/img/my_order.png" alt>
          <p>我的订单</p>
        </div>
        <div class="conten_right">
          <span>2</span>
          <img src="../assets/img/biggerfcfcfc.png" alt>
        </div>
      </div>
      <div class="order_friend_conten">
        <div class="conten_left" style="margin-left:.4rem">
          <img src="../assets/img/my_friend.png" alt>
          <p>我的好友</p>
        </div>
        <div class="conten_right" style="margin-right:0;">
          <span>2</span>
          <img src="../assets/img/biggerfcfcfc.png" alt>
        </div>
      </div>
    </div>
    <div class="my_wallet">
      <div class="wallet">
        <img src="../assets/img/my_money.png" alt>
        <p>我的钱包</p>
      </div>
      <div class="integral">
        <p class="integral_num">2</p>
        <p>积分</p>
      </div>
      <div class="balance">
        <p class="balance_num">2</p>
        <p>余额</p>
      </div>
      <div class="Profit">
        <p class="Profit_num">2</p>
        <p>收益</p>
      </div>
    </div>
    <div class="my_list">
      <div class="my_list_item">
        <p>邀请有礼</p>
        <img src="../assets/img/biggerfcfcfc.png" alt>
      </div>
      <div class="my_list_item">
        <p>实名认证</p>
        <img src="../assets/img/biggerfcfcfc.png" alt>
      </div>
      <div class="my_list_item">
        <p>下载APP</p>
        <img src="../assets/img/biggerfcfcfc.png" alt>
      </div>
      <div class="my_list_item">
        <p>客服中心</p>
        <img src="../assets/img/biggerfcfcfc.png" alt>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.my {
  .my_header {
    width: 100%;
    height: 400px;
    background: url("../assets/img/background.png");
    background-size: 100%;
    overflow: hidden;
    position: relative;
  }
  .my_header_set {
    position: relative;
    height: 46px;
    margin-top: 35px;
    margin-bottom: 49px;
    img {
      position: absolute;
      vertical-align: middle;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    img:nth-child(1) {
      width: 56px;
      height: 36px;
      margin-right: 108px;
    }
    img:nth-child(2) {
      width: 46px;
      height: 46px;
      margin-right: 26px;
    }
  }
  .my_info {
    width: 100%;
    height: 100px;
    padding: 0 30px;
    position: relative;
    .my_logo {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      img {
        display: block;
        width: 88px;
        height: 88px;
      }
    }
    .my_nick {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 30px;
      margin-left: 128px;
      i {
        display: inline-block;
        width: 70px;
        height: 30px;
        background-color: #171715;
        border-radius: 15px;
      }
    }
  }
  .my_vip {
    width: 690px;
    height: 100px;
    background-image: linear-gradient(-70deg, #292323 0%, #5f5b5a 100%),
      linear-gradient(#393228, #393228);
    background-blend-mode: normal, normal;
    border-radius: 20px 20px 0px 0px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
    overflow: hidden;
    padding: 30px;
    img {
      width: 36px;
      height: 27px;
    }
    span {
      color: #e7d5af;
      margin-left: 15px;
    }
    div {
      display: inline-block;
      width: 154px;
      height: 40px;
      background-image: linear-gradient(-60deg, #d6bd84 0%, #f5e0b2 100%),
        linear-gradient(#424355, #424355);
      background-blend-mode: normal, normal;
      border-radius: 20px;
      text-align: center;
      font-size: 24px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 30px;
      line-height: 40px;
    }
  }
  .order_friend {
    width: 100%;
    padding: 0 32px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    .order_friend_conten {
      width: 50%;
      height: 180px;
      display: flex;
      justify-content: space-between;
      text-align: center;
      .conten_left {
        img {
          width: 50px;
          height: 50px;
        }
        p {
          font-size: 22px;
        }
      }
      .conten_right {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 30px;
        span {
          font-size: 34px;
          margin-right: 16px;
        }
        img {
          width: 12px;
          height: 20px;
        }
      }
    }
    .my_friend {
      width: 50%;
      height: 180px;
    }
  }
  .my_wallet {
    margin-top: 20px;
    height: 180px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    font-size: 22px;
    align-items: center;
    .wallet,
    .integral,
    .balance,
    .Profit {
      width: 25%;
      text-align: center;
    }
    .integral_num,
    .balance_num,
    .Profit_num {
      font-size: 34px;
      line-height: 50px;
      height: 50px;
    }
    .wallet {
      img {
        width: 50px;
        height: 50px;
        vertical-align: middle;
        margin-bottom: 15px;
      }
    }
  }
  .my_list {
    margin-top: 20px;
    background-color: #fff;
    .my_list_item {
      display: flex;
      justify-content: space-between;
      height: 105px;
      align-items: center;
      border-bottom: 1px solid #eaeaea;
      padding: 0 30px;
      p {
        font-size: 30px;
      }
      img {
        width: 12px;
        height: 20px;
        vertical-align: middle;
      }
    }
  }
}
</style>
