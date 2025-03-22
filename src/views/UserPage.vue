<template>
  <div class="user-page">
    <div v-if="loading" class="loading">Загрузка данных...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else>
      <h2>Профиль пользователя</h2>
      <p>ID: {{ userId }}</p>
      <p>Имя: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Телефон: {{ user.phone }}</p>
    </div>

    <router-link :to="{ name: 'UsersList' }"
      >Назад к списку пользователей</router-link
    >
    <router-link :to="{ name: 'UserPosts', params: { id: userId } }"
      >Посты пользователя</router-link
    >
    <router-link :to="{ name: 'UserTodos', params: { id: userId } }"
      >Задачи пользователя</router-link
    >
    <button v-if="error" @click="fetchUser">Повторить попытку</button>
  </div>
</template>

<script>
export default {
  name: 'UserPage',
  props: ['id'],
  data() {
    return {
      user: null,
      loading: false,
      error: null,
    };
  },
  computed: {
    userId() {
      return this.id || this.$route.params.id;
    },
  },
  methods: {
    async fetchUser() {
      this.loading = true;
      this.error = null;
      try {
        if (!this.userId || isNaN(this.userId)) {
          throw new Error('Некорректный ID пользователя');
        }

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${this.userId}`
        );

        if (!response.ok) {
          throw new Error(`Ошибка ${response.status}: Пользователь не найден`);
        }

        this.user = await response.json();
      } catch (error) {
        this.error = error.message;
        console.error('Ошибка:', error);
      } finally {
        this.loading = false;
      }
    },
  },
  watch: {
    userId() {
      this.fetchUser();
    },
  },
  created() {
    this.fetchUser();
  },
};
</script>

<style scoped>
.loading {
  color: #666;
}
.error {
  color: #ff4444;
}
.user-page {
  padding: 20px;
}
</style>