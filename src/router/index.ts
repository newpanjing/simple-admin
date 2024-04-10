import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import("@/views/HomeView.vue")
    },{
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: ()=>import("@/views/NotFoundView.vue")
    },
    {
      path: '/about',
      name: 'about',
      component: () => import("@/views/AboutView.vue")
    },{
      path: '/list/:id',
      name: 'list',
      component: ()=>import("@/views/ListView.vue")
    }
  ]
})

export default router
