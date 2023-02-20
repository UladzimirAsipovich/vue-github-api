import { createRouter, createWebHistory } from "vue-router";
import StoredView from "../views/StoredView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: StoredView,
    },
    {
      path: "/graphql",
      name: "graphql",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/task",
      name: "task",
      component: () => import("../views/TaskView.vue"),
    },
  ],
});

export default router;
