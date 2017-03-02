import Vue from 'vue'
import Router from 'vue-router'
import Counter from '@/components/routes/Counter'
import Dice from '@/components/routes/Dice'
import Statistics from '@/components/routes/Statistics'
import Hello from '@/components/routes/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Counter',
      component: Counter,
      children: [
        {
          path: '/dice',
          name: 'Dice',
          component: Dice
        },
        {
          path: '/statistics',
          name: 'Statistics',
          component: Statistics
        }
      ]
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
