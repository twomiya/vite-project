import { createRouter, createWebHistory } from "vue-router";
// import Login from "../pages/login/index.vue";
const Login = () => import("../login/index.vue");
const Layout = () => import("../layout/index.vue");
const Dashboard = () => import("../pages/dashboard/index.vue");
const Manage = () => import("../pages/manage/index.vue");
const Create = () => import("../pages/manage/create.vue");
// 在 Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHistory(),
  // 路由地址
  routes: [
    {
      name: "login",
      path: "/login",
      component: Login,
    },
    {
      path: "/",
      name: "layout",
      component: Layout,
      redirect: "/dashboard",
      children: [
        {
          path: "/dashboard",
          component: Dashboard,
          name: "dashboard",
          meta: {
            title: "首页",
            breadcrumb: [
              {
                title: "首页",
              },
            ],
          },
        },
        {
          path: "/manage",
          component: Manage,
          name: "manage",
          meta: {
            title: "文章管理",
            breadcrumb: [
              {
                title: "文章管理",
              },
            ],
          },
        },
        {
          path: "/manage/create",
          name: "create",
          component: Create,
          meta: {
            title: "创建文章",
            breadcrumb: [
              {
                title: "文章管理",
                path: "/manage",
              },
              {
                title: "创建",
              },
            ],
          },
        },
      ],
    },
  ],
});
