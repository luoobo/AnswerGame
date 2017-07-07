import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Question from '@/components/Question'
import Score from '@/components/Score'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/score',
      name: 'score',
      component: Score
    },
    {
      path: '/question',
      name: 'question',
      component: Question,
      beforeEnter: (to, from, next) => {
        if (!from.name) {
          next({path: '/'})
        }
        next()
      }
    }
  ]
})
