import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
return VueRouterPush.call(this, to).catch(err => err)
}

  const routes = [
  // {
  //   path:'/box',
  //   name:'box',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/test/box.vue')
  // },
  {
    path:'/login',
    name:'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        name:'desktop',
        path:'/desktop',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Desktop.vue')

      }
    //   ,{
    //   path:'/departmentList',
    //   name:'departmentList',
    //   component: () => import(/* webpackChunkName: "about" */ '@/views/system/Department/DepartmentList.vue')
    // },
    // {
    //   path:'/menuList',
    //   name:'menuList',
    //   component: () => import(/* webpackChunkName: "about" */ '@/views/system/Menu/MenuList.vue')
    // },
    // {
    //   path:'/roleList',
    //   name:'roleList',
    //   component: () => import(/* webpackChunkName: "about" */ '@/views/system/Role/RoleList.vue')
    // },
    // {
    //   path:'/userList',
    //   name:'userList',
    //   component: () => import(/* webpackChunkName: "about" */ '@/views/system/User/UserList.vue')
    // }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
