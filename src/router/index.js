import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "@/views/ProductView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/product/:slug",
      name: "single-product",
      component: ProductView,
    },
  ],
  linkExactActiveClass: "active",
  scrollBehavior() {
    // always scroll to top
    return { top: 0 /*behavior: "smooth"*/ };
  },
});

export default router;
