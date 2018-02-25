import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/Login'
import Layout from '../pages/layout/Layout'
import HelloWorld from '../components/HelloWorld'
import UserList from '../pages/user/UserList'
import NotFound from '../pages/404'
import store from '../store'

Vue.use(Router)

export const asyncRouterMap = [

]

// meta.name 为侧边栏显示的标题
// meta.single 表示在侧标栏中，该parent不显示子路由
// meta.hidden 表示是否在侧边栏显示
export const routes = [
  { path: '/login', name: 'Login', component: Login, meta: { hidden: true } },
  { path: '/404', name: '404', component: NotFound, meta: { hidden: true } },

  {
    path: '/',
    component: Layout,
    meta: {
      name: "首页"
    },
    children: [{
      path: "",
      component: HelloWorld,
      meta: {
        name: "Hello"
      },
    }]
  },

  {
    path: "/users",
    component: Layout,
    meta: {
      name: "用户管理",
      single: true,
    },
    children: [{
      path: "",
      component: UserList,
      meta: {
        name: "用户列表"
      },
    }, {
      path: ":id",
      component: HelloWorld,
      name: 'userDetail',
      meta: {
        name: "用户详情",
        hidden: true
      },
    }]
  },

  {
    path: '*',
    redirect: '/404',
    meta: {
      hidden: true
    }
  }
]


const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {

  // 除了登录页，其他页面都需要先登录
  if (to.path != '/login' && !store.state.session.isLogin) {
    return next({ path: '/login' })
  }

  next()
})

export default router