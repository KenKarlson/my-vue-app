import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/HomePage.vue') },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutPage.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/ContactPage.vue'),
  },
  { path: '*', component: () => import('@/views/NotFoundPage.vue') },
  {
    path: '/user/:id',
    name: 'User',
    component: () => import('@/views/UserPage.vue'),
    props: true,
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
