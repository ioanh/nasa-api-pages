import { createRouter, createWebHistory, Router } from 'vue-router'
import {getAuth} from 'firebase/auth'
import Home from '@/components/Home.vue'

const router =  createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/PageOne',
      component: () => import('@/components/PageOne.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/PageTwo',
      component: () => import('@/components/PageTwo.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/PageThree',
      component: () => import('@/components/PageThree.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Register',
      component: () => import('@/components/Register.vue'),
    },
    {
      path: '/SignIn',
      component: () => import('@/components/SignIn.vue'),
    },
   
  ],
})

router.beforeEach((to, from, next) => {

  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if(getAuth().currentUser) {
      next();
    }
    else {
      alert('You need to be logged in')
      next('/')
    }
  }
  else {
    next();
  }
})

export default router


