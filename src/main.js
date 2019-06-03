import Vue from 'vue'
import App from './App'
import store from './store/index'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './style/base.css'
import './style/commen.css'
import LyTab from 'ly-tab'
import axios from './api/index'
Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(LyTab)
import VConsole from 'vconsole'

if (process.env.NODE_ENV === 'development') {
  new VConsole()
};
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  render: h => h(App)
})
window.onresize = setHtmlFontSize;
function setHtmlFontSize(){
    const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    const htmlDom = document.getElementsByTagName('html')[0];
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';
};
setHtmlFontSize();