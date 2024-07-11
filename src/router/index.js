import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/home.vue"),
    },
    {
      path: "/members",
      component: () => import("../components/miembros/miembrosComponent.vue"),
    },
  ],
});

export default router;
