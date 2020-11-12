import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: () =>import( "./views/Login.vue")
    },
    {
      path: "/shouye",
      name: "shouye",
      component: () =>import( "./views/shouye.vue")
    },
    {
      path: "/",
      name: "Head",
      component: () =>import( "./components/Head.vue")
    },
    {
      path: "/wuyejiaofei",
      name: "wuyejiaofei",
      component: () =>import( "./components/zhihuiwuye/wuyejiaofei.vue")
    },
    {
      path: "/shouyenr",
      name: "shouyenr",
      component: () =>import( "./components/shouyenr.vue")
    }
    ,
    {
      path: "/jiaofeichaxun",
      name: "jiaofeichaxun",
      component: () =>import( "./components/zhihuiwuye/jiaofeichaxun.vue")
    }
  ]
});
 
 