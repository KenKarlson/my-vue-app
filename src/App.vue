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
button {
  border: 1px solid #b94242;
  border-radius: 4px;
  cursor: pointer;
}
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.router-link-exact-active {
  color: #d4554c;
  border-bottom: 2px solid #b94242;
}
</style>
