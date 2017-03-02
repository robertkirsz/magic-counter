import Vue from 'vue'
import Router from 'vue-router'
import Counter from '@/components/Counter'
import Dice from '@/components/Dice'
import Statistics from '@/components/Statistics'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/dice',
      name: 'Dice',
      component: Dice
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
