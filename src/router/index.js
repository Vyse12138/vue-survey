import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Result from "../views/Result.vue";
import Survey from "../views/Survey.vue";
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/survey",

    component: Survey
  },
  {
    path: "/result/:surveyID/:securityKey",
    component: Result,
    props: true
  },
  {
    path: "/gratitude",
    // route level code-splitting, lazy-loaded when visited.
    component: () => import("../views/Gratitude.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
