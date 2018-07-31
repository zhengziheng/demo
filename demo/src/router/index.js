import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Compare from '@/components/compare'
import Search from '@/components/search'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path:'/search',
          name:'search',
          component:Search,
        },
        {
          path:'/compare',
          name:'compare',
          component:Compare,
        },
      ]
    },
  ]
})
