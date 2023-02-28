const routes = [
  {
    path: "/",
    component: () => import("layouts/login-activity.vue"),
    children: [
      { path: "/", component: () => import("pages/login-window.vue") },
      { path: "/reg-window", component: () => import("pages/reg-window.vue") },
      {
        path: "/forgot-window",
        component: () => import("pages/forgot-window.vue"),
      },
      { path: "/finger-login", component: () => import("pages/finger-print/fingerLogin.vue") },
      { path: "/finger-register", component: () => import("pages/finger-print/finger-Registration.vue") },

    ],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/FamixHome", component: () => import("pages/IndexPage.vue") },
      // { path: "/test", component: () => import("components/test-check.vue") },
      {
        path: "/user-profile/:id",
        component: () => import("pages/user-profile.vue"),
      },
      {
        path: "/famix-dashboard",
        component: () => import("pages/admin-pannel/admin-dashboard.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/MessengerLayout.vue"),
    children: [
      { path: "/chat-page", component: () => import("pages/chat-page.vue") },
      {
        path: "/active-people",
        component: () => import("pages/active-people.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/ChatLayout.vue"),
    children: [
      {
        path: "/messenger-section",
        component: () => import("pages/messenger-section.vue"),
      },
      { path: "/audio-call", component: () => import("pages/audio-call.vue") },
      { path: "/video-call", component: () => import("pages/video-call.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
