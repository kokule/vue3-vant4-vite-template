import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    redirect: "home",
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
