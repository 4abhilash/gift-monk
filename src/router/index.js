import Vue from 'vue'
import VueRouter from 'vue-router'
import AddProducts from '../views/AddProducts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AddProducts',
    component: AddProducts
  }
]

const router = new VueRouter({
  routes
})

export default router
