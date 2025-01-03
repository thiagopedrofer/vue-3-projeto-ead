import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import DefaultTemplate from '@/layouts/DefaultTemplate.vue'
import MySupports from '@/views/supports/MySupports.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/campus',
      component: DefaultTemplate,
      children: [
        {
          path: '',
          name: 'campus.home',
          component: HomeView
        },
        {
          path: 'minhas-duvidas',
          name: 'campus.my.support',
          component: MySupports
        }
      ]
    },
  ],
})

export default router
