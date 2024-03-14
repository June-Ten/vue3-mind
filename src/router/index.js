import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/login/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router