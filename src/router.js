import Vue from 'vue'
import VueRouter from 'vue-router'

const Emoji = () => import(
  /* webpackChunkName: "Emoji" */
  './pages/Emoji.vue')

const Photos = () => import(
  /* webpackChunkName: "Photos" */
  './pages/Photos.vue')


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
