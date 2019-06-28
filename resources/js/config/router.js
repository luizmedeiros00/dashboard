import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/js/components/pages/Home'
// import Premissa from '@/js/components/pages/Premissa'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router