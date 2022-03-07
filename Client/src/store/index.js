import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    color: "success"
  },
  mutations: {
    SET_USER(state, newUser) {
      state.user = newUser
    },
    SET_COLOR(state, newColor) {
      state.color = newColor;
    }
  },
  actions: {
    updateUser({ commit }, newUser) {
      commit("SET_USER", newUser);
    },
    resetUser({ commit }) {
      commit("SET_USER", {})
    },
    updateColor({ commit }, newColor) {
      commit('SET_COLOR', newColor);
    },
    toggleColor({ commit, state }) {
      const newColor = state.color === "success" ? "primary" : "success";
      localStorage.setItem("color", newColor)
      commit('SET_COLOR', newColor);
    }
  },
  modules: {
  }
})
