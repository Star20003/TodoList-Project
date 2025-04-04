import { createRouter, createWebHashHistory } from "vue-router";
import IntroFirstPage from "./pages/Intro/IntroFirstPage.vue";
import IntroSecondPage from "./pages/Intro/IntroSecondPage.vue";
import IntroThirdPage from "./pages/Intro/IntroThirdPage.vue";
import IntroFourthPage from "./pages/Intro/IntroFourthPage.vue";
import IntroFifthPage from "./pages/Intro/IntroFifthPage.vue";

const routes = [
    { path: '/', component: IntroFirstPage },
    { path: '/intro1', component: IntroSecondPage },
    { path: '/intro2', component: IntroThirdPage },
    { path: '/intro3', component: IntroFourthPage },
    { path: '/intro4', component: IntroFifthPage }
]

const router = createRouter({ 
    history: createWebHashHistory(),
    routes 
})

export default router;