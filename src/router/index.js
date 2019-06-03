import Vue from "vue";
import Router from "vue-router";
import index from "@/pages/index";
import shouye from "@/pages/shouye";
import fx from "@/pages/fengxiang";
import gwc from "@/pages/gouwuche";
import my from "@/pages/my";
import Recommend from "@/components/Recommend";
import Healthcare from "@/components/Healthcare";
import login from "@/pages/login";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: index,
      redirect: "/shouye",
      children: [
        {
          path: "/shouye",
          name: "shouye",
          component: shouye,
          children: [
            { path: "/recommend", name: "recommend", component: Recommend },
            { path: "/healthcare", name: "healthcare", component: Healthcare }
          ]
        },
        { path: "/fx", name: "fx", component: fx },
        { path: "/gwc", name: "gwc", component: gwc },
        { path: "/my", name: "my", component: my }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: login
    }
  ]
});
// 全局路由守卫
router.beforeEach((to, from, next) => {
  // console.log(to);
  if(to.path !== "/login"){
    if(sessionStorage.getItem('logoInfo')){
      next();
    }else{
      next("/login");
    }
  }else{
    next();
  }
});
export default router;
