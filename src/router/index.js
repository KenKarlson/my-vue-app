import Vue from "vue";
import VueRouter from "vue-router";
import MainComponent from "@/components/MainComponent.vue";

Vue.use(VueRouter);

const routes = [{ path: "/", component: MainComponent }];

export default new VueRouter({
  mode: "history",
  routes,
});
