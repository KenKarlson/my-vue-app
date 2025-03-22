import Vue from "vue";
import VueRouter from "vue-router";

import HeaderComponent from "@/components/HeaderComponent.vue";
import MainComponent from "@/components/MainComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: MainComponent },
  { path: "/about", component: HeaderComponent },
  { path: "/contact", component: FooterComponent },
];

export default new VueRouter({
  mode: "history",
  routes,
});
