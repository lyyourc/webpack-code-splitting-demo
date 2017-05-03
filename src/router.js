import Vue from 'vue'
import VueRouter from 'vue-router'

import Emoji from './pages/Emoji.vue' 
import Photos from './pages/photos.vue' 


Vue.use(VueRouter)


export default new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/',
      component: Emoji,
    },
    {
      path: '/photos',
      component: Photos,
    },
  ],
})
