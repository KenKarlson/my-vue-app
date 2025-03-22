<template>
  <header>
    <nav>
      <router-link :to="{ name: 'Home' }">Главная</router-link>
      <router-link :to="{ name: 'About' }">О нас</router-link>
      <router-link :to="{ name: 'Contact' }">Контакты</router-link>
      <button><router-link :to="{ name: 'User' }">Вход</router-link></button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>