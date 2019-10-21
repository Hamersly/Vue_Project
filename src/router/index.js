import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ad from '../views/Ads/Ad.vue'
import AdList from '../views/Ads/AdList'
import NewAd from '../views/Ads/NewAd'
import Login from '../views/Auth/Login'
import Registration from '../views/Auth/Registration'
import Orders from '../views/User/Orders'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registration',
    name: 'reg',
    component: Registration
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders
  },
  {
    path: '/list',
    name: 'list',
    component: AdList
  },
  {
    path: '/ad/:id',
    name: 'ad',
    component: Ad
  },
  {
    path: '/new',
    name: 'newAd',
    component: NewAd
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
