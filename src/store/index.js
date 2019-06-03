import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    logoInfo:'',
  },
  mutations:{
    getLogoInfo(state,data){            
        state.logoInfo = data;
    },
},
})
export default store