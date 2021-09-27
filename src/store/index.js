import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate";
// import * as Cookies from 'js-cookie';

Vue.use(Vuex)

export default new Vuex.Store({
  
  // plugins: [createPersistedState({
  //   getState: (key) => Cookies.getJSON(key),
  //   setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
  // })],

  state: {
    username: ''
  },
  mutations: {
    UPDATE_USERNAME(state, userName) {
      state.username = userName;
  },
  },
  actions: {
    updateUserName ({commit}, userName) {
      commit('UPDATE_USERNAME', userName );
  },
  },
  modules: {
  }
})
