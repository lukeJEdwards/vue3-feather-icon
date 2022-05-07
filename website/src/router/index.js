import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@pages/index.vue"),
  },
  {
    path: "/guide",
    component: () => import("@pages/guide.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
