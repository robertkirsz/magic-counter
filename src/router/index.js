import Vue from 'vue'
import Router from 'vue-router'
import CounterScreen from '@/components/routes/CounterScreen'
import DiceScreen from '@/components/routes/DiceScreen'
import StatisticsScreen from '@/components/routes/StatisticsScreen'
import Hello from '@/components/routes/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CounterScreen',
      component: CounterScreen,
      children: [
        {
          path: '/dice',
          name: 'DiceScreen',
          component: DiceScreen
        },
        {
          path: '/statistics',
          name: 'StatisticsScreen',
          component: StatisticsScreen
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
