import { createRouter, createWebHistory } from 'vue-router'
import PaginaInicial from '../views/PaginaInicial.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pagina-inicial',
      component: PaginaInicial
    }
  ]
})

export default router
