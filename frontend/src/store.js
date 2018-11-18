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
        .catch(error => {
          console.error(error);
          commit("setErrorMessage", "会員登録に失敗しました");
        });
    }
  }
});
