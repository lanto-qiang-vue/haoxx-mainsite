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
          //门店赋能
          path:'/storeFunction',
          name:'storeFunction',
          component: () => import('@/phone/storeFunction.vue')
      },
      {
          //车主服务
          path:'/ownerService',
          name:'ownerService',
          component: () => import('@/phone/ownerService.vue')
      },
      {
          //关于我们
          path:'/aboutMe',
          name:'aboutMe',
          component: () => import('@/phone/aboutMe.vue')
      },
      {
          //联系我们
          path:'/contactUs',
          name:'contactUs',
          component: () => import('@/phone/contactUs.vue')
      },
      {
          //在线咨询
          path:'/businessConsult',
          name:'businessConsult',
          component: () => import('@/phone/businessConsult.vue')
      },
	  {
      path: '/consult',
      name: 'consult',
	    component: () => import('@/views/consult.vue')
    },
    {
      path: '/hxx-content',
      name: 'hxx-content',
	    component: () => import('@/phone/hxx-content.vue')
    },

  ]
})
route.afterEach((to, from) => {
	window.scrollTo (0, 0);
})

export default route
