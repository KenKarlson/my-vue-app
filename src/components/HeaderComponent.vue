<template>
  <header>
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/main">Не главная</router-link>|
      <router-link to="/about">Другая</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>