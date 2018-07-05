import Vue from "vue";
import Router from "vue-router";
import Mymusic from "@/views/mymusic.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "mymusic",
      component: Mymusic
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
