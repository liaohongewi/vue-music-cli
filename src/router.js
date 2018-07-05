import Vue from "vue";
import Router from "vue-router";
import Mymusic from "@/views/mymusic.vue";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "mymusic",
      component: Mymusic
    }
  ]
});
