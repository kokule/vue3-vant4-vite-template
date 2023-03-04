import Layout from "@/layout/index.vue";
import type { RouteRecordRaw } from "vue-router";
import Demo from "@/views/demo/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    // component: Layout,
    redirect: "Demo",
    children: [
      {
        path: '/',
        name: 'home',
        //使用import可以路由懒加载，如果不使用，太多组件一起加载会造成白屏
        meta: {
          level: 0,
          title: "智能报销"
        },
        component: () => import('@/views/home/index.vue')
      },
      {
        path: "demo",
        name: "Demo",
        component: Demo,
        meta: {
          title: "主页"
        }
      },
      {
        path: "tools",
        name: "Tools",
        component: () => import("@/views/tools/index.vue"),
        meta: {
          title: "工具"
        }
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/about/index.vue"),
        meta: {
          title: "关于",
          noCache: true
        }
      }
    ]
  },
  {
    path: "/reimbursement",
    name: 'reimbursement',
    meta: {
      level: 1,
      title: "费用报销"
    },
    component: () => import("../views/reimbursement/index.vue"),
  }, {
    path: "/apply",
    name: 'apply',
    meta: {
      level: 1,
      title: "事前申请"
    },
    component: () => import("../views/apply/index.vue"),
  }, {
    path: "/loan",
    name: 'loan',
    meta: {
      level: 1,
      title: "预支借款"
    },
    component: () => import("../views/loan/index.vue"),
  },
];

export default routes;
