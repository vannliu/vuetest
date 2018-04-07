import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import HelloWorld from '@/components/HelloWorld'
import Booksart from '@/components/Booksart'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/movie/booksart/:id',
      name: 'booksart',
      component: Booksart
    },
    {
      path: '/movie/search',
      component:Search,
      name: 'movie-search'
    }
  ]
})
