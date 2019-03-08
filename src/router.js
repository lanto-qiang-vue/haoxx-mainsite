import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let route= new Router({
  routes: [
      {
          path: '/phone',
          name: 'phone',
          component: () => import('@/phone/storeFunction.vue')
      },
    {
      path: '/',
      name: 'home',
	    component: () => import('@/views/Home.vue')
    },
	  {
      path: '/consult',
      name: 'consult',
	    component: () => import('@/views/consult.vue')
    },
  ]
})
route.afterEach((to, from) => {
	window.scrollTo (0, 0);
})

export default route
