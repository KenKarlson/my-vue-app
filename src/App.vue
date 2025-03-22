<template>
  <div id="app">
    <HeaderComponent />
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'App',

  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {};
  },
};
</script>
<style>
.router-link-exact-active {
  color: #d4554c;
  border-bottom: 2px solid #b94242;
}
</style>
