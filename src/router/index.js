import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Home from '@/components/Home'
import Notebook from '@/components/Notebook'
import Mouse from '@/components/Mouse'
import Keyboard from '@/components/Keyboard'
import AboutUs from '@/components/AboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/notebook',
      name: 'Notebook',
      component: Notebook
    },
    {
      path: '/mouse',
      name: 'Mouse',
      component: Mouse
    },
    {
      path: '/keyboard',
      name: 'Keyboard',
      component: Keyboard
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    }
  ]
})
