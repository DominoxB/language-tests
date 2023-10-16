import { createRouter, createWebHistory } from "vue-router"
import HomePage from "@/views/HomePage.vue"
import EnglishPage from "@/views/EnglishPage.vue"
import RussianPage from "@/views/RussianPage.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/EnglishPage", name: 'English',  component: EnglishPage },
    { path: "/RussianPage", name: 'Russian', component: RussianPage }
  ],
});

export default router;
