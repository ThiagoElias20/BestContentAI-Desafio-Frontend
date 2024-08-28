import { createRouter, createWebHistory } from 'vue-router'
import PaginaInicial from '../views/PaginaInicial.vue'
import PaginaForm from '../views/PaginaForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pagina-inicial',
      component: PaginaInicial
    },
    {
      path: '/pagina-form',
      name: 'pagina-form',
      component: PaginaForm
    }
  ]
})

export default router
