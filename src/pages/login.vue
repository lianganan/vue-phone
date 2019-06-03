<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/img/login_top.png" alt>
    </div>
    <div class="input">
      <input type="number" name="zhanghao" v-model="accountNum">
      <input type="text" name="mima" v-model="password">
      <button @click="submit">登陆</button>
      <p>忘记密码</p>
      <button>注册</button>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      accountNum: "",
      password: ""
    };
  },
  methods: {
    submit() {
      console.log(this.accountNum);
      console.log(this.password);

      if (!this.accountNum.trim() || !this.password.trim()) {
        Toast({
          message: "账号或密码不能为空",
          position: "bottom",
          duration: 2000
        });
      } else {
        this.axios({
          method: "post",
          url: "h5/member/login",
          data: "phone=" + this.accountNum + "&password=" + this.password
        }).then(res => {
          console.log(res);
          if (res.data.success) {
            this.$store.commit('getLogoInfo',JSON.stringify(res.data.data));
            console.log(this.$store.state);
            sessionStorage.setItem('logoInfo',JSON.stringify(res.data.data));
            this.$router.push({ path:'/recommend',});
          } else {
            Toast({
              message: res.data.message,
              position: "bottom",
              duration: 2000
            });
          }
        });
      }
    }
  }
};
</script>
<style scoped lang="less">
.login {
  height: 100%;
  background-color: #fff;
  .logo {
    img {
      display: block;
      width: 100%;
    }
  }
  .input {
    text-align: center;
    input {
      width: 600px;
      height: 80px;
      border: 1px solid #e5e5e5; /*no*/
      border-radius: 40px;
      padding-left: 40px;
      font-size: 26px;
    }
    button {
      width: 600px;
      height: 80px;
      border: 1px solid #e5e5e5; /*no*/
      border-radius: 40px;
      font-size: 30px;
      color: #fff;
      background-color: rgba(0, 185, 253);
    }
    p {
      font-size: 26px;
      color: #c4c7cf;
      text-align: right;
      padding-right: 86px;
      margin: 20px 0;
    }
  }
}
</style>
