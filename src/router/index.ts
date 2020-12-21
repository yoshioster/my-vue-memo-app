import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import List from '../views/List.vue'
import Detail from "../views/Detail.vue";
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: List
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/detail',
    name: 'Register',
    component: Detail
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
