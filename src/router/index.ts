import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/ToDoList'
  },
  {
    path: '/ToDoList',
    name: 'ToDoList',
    component: () => import('@/views/ToDoList.vue')
  }, {
    path: '/Add',
    name: 'Add',
    component: () => import('@/views/AddWork.vue')
  },{
    path: '/DoneWorks',
    name: 'DoneWorks',
    component: () => import('@/views/DoneWork.vue')
  },{
    path: '/FailedWorks',
    name: 'FailedWorks',
    component: () => import('@/views/FailedWork.vue')
  },{
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
