import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import EnglishPage from "@/views/EnglishPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/EnglishPage", name: 'English',  component: EnglishPage },
  ],
});

export default router;
