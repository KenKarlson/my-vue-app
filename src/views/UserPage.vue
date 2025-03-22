<template>
  <div class="user-page">
    <div v-if="loading">Загрузка...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <h2>Профиль пользователя</h2>
      <p>ID пользователя: {{ userId }}</p>
      <p>Имя: {{ user.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserPage',

  data() {
    return {
      user: null,
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchUser() {
      this.loading = true;
      this.error = null;
      try {
        // Проверяем что ID является числом )) было :число))
        if (isNaN(this.userId)) {
          throw new Error('Некорректный ID пользователя');
        }

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${this.userId}`
        );

        if (!response.ok) {
          throw new Error('Пользователь не найден');
        }

        this.user = await response.json();
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
  computed: {
    userId() {
      return this.$route.params.id;
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