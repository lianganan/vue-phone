import Vue from "vue";
import Router from "vue-router";
import index from "@/pages/index";
import shouye from "@/pages/shouye";
import fx from "@/pages/fengxiang";
import gwc from "@/pages/gouwuche";
import my from "@/pages/my";
import tuijian from "@/components/tuijian";
Vue.use(Router);

export default new Router({
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
          children: [{ path: "/tuijian", name: "tuijian", component: tuijian }]
        },
        { path: "/fx", name: "fx", component: fx },
        { path: "/gwc", name: "gwc", component: gwc },
        { path: "/my", name: "my", component: my }
      ]
    }
  ]
});
