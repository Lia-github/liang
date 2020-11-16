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
      component: () =>import( "./views/shouye.vue"),
      children:[
        {
          path: "/shouye",
          redirect:"/shouyenr"
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
        ,
        {
          path: "/gonggaoguanli",
          name: "gonggaoguanli",
          component: () =>import( "./components/zhihuiwuye/gonggaoguanli.vue")
        }
        ,
        {
          path: "/guzhangbaoxiu",
          name: "guzhangbaoxiu",
          component: () =>import( "./components/zhihuiwuye/guzhangbaoxiu.vue")
        }
        ,
        {
          path: "/fangwufenlei",
          name: "fangwufenlei",
          component: () =>import( "./components/shujutongji/fangwufenlei.vue")
        }
        ,
        {
          path: "/jiaofeifenxi",
          name: "jiaofeifenxi",
          component: () =>import( "./components/shujutongji/jiaofeifenxi.vue")
        }
        ,
        {
          path: "/yuyueguahao",
          name: "yuyueguahao",
          component: () =>import( "./components/shequyiliao/yuyueguahao.vue")
        }
        ,
        {
          path: "/kuaisuyuyue",
          name: "kuaisuyuyue",
          component: () =>import( "./components/shequyiliao/kuaisuyuyue.vue")
        }
        ,
        {
          path: "/xiangyayiyuan",
          name: "xiangyayiyuan",
          component: () =>import( "./components/shequyiliao/xiangyayiyuan.vue")
        }
        ,
        {
          path: "/qitayiyuan",
          name: "qitayiyuan",
          component: () =>import( "./components/shequyiliao/qitayiyuan.vue")
        }
        ,
        {
          path: "/jiankangxiaoties",
          name: "jiankangxiaoties",
          component: () =>import( "./components/shequyiliao/jiankangxiaoties.vue")
        }
        ,
        {
          path: "/yishengjianjie",
          name: "yishengjianjie",
          component: () =>import( "./components/shequyiliao/yishengjianjie.vue")
        }
        ,
        {
          path: "/yishengxiangqing",
          name: "yishengxiangqing",
          component: () =>import( "./components/shequyiliao/yishengxiangqing.vue")
        }
      ]
    },
    {
      path: "/",
      name: "Head",
      component: () =>import( "./components/Head.vue")
    }
    
  ]
});
 
 