import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import DefaultTemplate from '@/layouts/DefaultTemplate.vue'
import MySupports from '@/views/supports/MySupports.vue'
import ModulesAndLessons from '@/views/modules/ModulesAndLessons.vue'
import Auth from '@/views/auth/Auth.vue'
import ForgetPassword from '@/views/auth/ForgetPassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/campus',
      component: DefaultTemplate,
      children: [
        {
          path: 'modulos',
          name: 'campus.modules',
          component: ModulesAndLessons
        },
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
    {
      path: '/',
      name: 'auth',
      component: Auth
    },
    {
      path: '/recuperar-senha',
      name: 'forget.password',
      component: ForgetPassword
    }
  ],
})

export default router
