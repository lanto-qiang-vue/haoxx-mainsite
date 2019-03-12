import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let route= new Router({
  routes: [
    {
      path: '/',
      name: 'home',
	    component: () => import('@/views/Home.vue')
    },
      {
          path:'/storeFunction',
          name:'storeFunction',
          component: () => import('@/phone/storeFunction.vue')
      },
      {
          path:'/ownerService',
          name:'ownerService',
          component: () => import('@/phone/ownerService.vue')
      },
	  {
      path: '/consult',
      name: 'consult',
	    component: () => import('@/views/consult.vue')
    },
    {
      path: '/hxx-content',
      name: 'hxx-content',
	    component: () => import('@/views/hxx-content.vue')
    },

  ]
})
route.afterEach((to, from) => {
	window.scrollTo (0, 0);
})

export default route
