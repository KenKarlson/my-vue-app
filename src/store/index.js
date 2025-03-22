import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//Проверим работу store и все такое
export default new Vuex.Store({
  state: {
    counter: 0,
    user: null,
  },
  mutations: {
    INCREMENT(state) {
      state.counter++;
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    login({ commit }, credentials) {
      commit('SET_USER', { name: 'John Milcheg' });
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
});
