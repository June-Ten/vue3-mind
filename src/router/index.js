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
        path: 'manage',
        name: 'Manage',
        component: () => import('@/views/manage/index.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/login/index.vue')
      },
      {
        path: 'saleMange',
        name: 'SaleMange',
        component: () => import('@/views/saleMange/index.vue')
      },
      {
        path: 'salesLeft',
        name: 'salesLeft',
        component: () => import('@/views/manage/components/salesLeft.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router