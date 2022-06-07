
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MessengerLayout.vue'),
    children: [
      { path: '/chat-page', component: () => import('pages/chat-page.vue') },
      { path: '/active-people', component: () => import('pages/active-people.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/ChatLayout.vue'),
    children: [
      { path: '/messenger-section', component: () => import('pages/messenger-section.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
