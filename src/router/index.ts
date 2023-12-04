import { createRouter, createWebHistory } from "vue-router"
import HomePage from "@/views/HomePage.vue"
import EnglishPage from "@/views/EnglishPage.vue"
import RussianPage from "@/views/RussianPage.vue"
import ResultPage from "@/views/ResultPage.vue"
import AboutUsPage from "@/views/AboutUsPage.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/language-tests", component: HomePage },
    { path: "/EnglishPage", name: 'English',  component: EnglishPage },
    { path: "/RussianPage", name: 'Russian', component: RussianPage },
    { path: "/ResultPage", name: 'Result', component: ResultPage },
    { path: "/AboutUsPage", name: 'AboutUs', component: AboutUsPage }
  ],
});

export default router;
