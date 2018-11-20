import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errorMessage: "",
    notification: ""
  },
  mutations: {
    setNotification(state, payload) {
      state.notification = payload;
    },
    setErrorMessage(state, payload) {
      state.errorMessage = payload;
    },
    clearErrorMessage(state) {
      state.errorMessage = "";
    },
    clearNotification(state) {
      state.notification = "";
    }
  },
  actions: {
    async signUp({ commit }, { name, email, password, passwordConfirmation }) {
      commit("clearErrorMessage");
      this.$http
        .post("api/signup", {
          name,
          email,
          password,
          password_confirmation: passwordConfirmation
        })
        .then(() => {
          commit("setNotification", "会員登録が完了しました");
        })
        .catch(() => {
          commit("setErrorMessage", "会員登録に失敗しました");
        });
    },
    async signIn({ commit }, { email, password }) {
      commit("clearErrorMessage");
      this.$http
        .post("api/signin", {
          email,
          password
        })
        .then(response => {
          localStorage.setItem("jwt", response.data.access_token);
        })
        .catch(() => {
          commit("setErrorMessage", "会員登録に失敗しました");
        });
    },
    async clearMessages({ commit }) {
      commit("clearErrorMessage");
      commit("clearNotification");
    }
  }
});
