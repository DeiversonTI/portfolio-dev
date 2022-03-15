
const routes = [
  {
    path: '/',
    component: () => import('layouts/Home.vue'),
    children: [
      { path: '/Index', component: () => import('pages/Index.vue') },
      { path: '/sobre', component: () => import('src/pages/sobre.vue') },
      { path: '/skills', component: () => import('pages/Skills.vue') },
      { path: '/works', component: () => import('pages/Works.vue') },
      { path: '/contact', component: () => import('pages/Contact.vue') },
      { path: '/testitem', component: () => import('pages/TestItem.vue') },
      { path: '/MainLayout', component: () => import('layouts/MainLayout.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
