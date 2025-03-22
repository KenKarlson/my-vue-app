<template>
  <div class="user-page">
    <h2>Профиль пользователя</h2>
    <p>ID пользователя: {{ userId }}</p>
    <p>Имя: {{ user.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserPage',
  data() {
    return {
      user: null,
    };
  },
  computed: {
    userId() {
      return this.$route.params.id;
    },
  },
  methods: {
    async fetchUser() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${this.userId}`
        );
        this.user = await response.json();
      } catch (error) {
        console.error('Ошибка загрузки:', error);
      }
    },
  },
  watch: {
    userId(newId) {
      this.fetchUser();
    },
  },
  created() {
    console.log('ID из created:', this.$route.params.id);
    this.fetchUser();
  },
};
</script>