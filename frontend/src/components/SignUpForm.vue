<template>
  <div class="auth-form">
    <p v-if="errorMessage !== ''">{{ errorMessage }}</p>
    <div class="form-item">
      <input
        v-model="formName"
        type="text"
        name="name"
        placeholder="ユーザー名"
      />
    </div>
    <div class="form-item">
      <input
        v-model="formEmail"
        type="email"
        name="email"
        placeholder="メールアドレス"
      />
    </div>
    <div class="form-item">
      <input
        v-model="formPassword"
        type="password"
        name="password"
        placeholder="パスワード"
      />
    </div>
    <div class="form-item">
      <input
        v-model="formPasswordConfirmation"
        type="password"
        name="passwordConfirmation"
        placeholder="パスワード(確認)"
      />
    </div>
    <div class="form-item"><button @click="signUp">登録</button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formName: "",
      formEmail: "",
      formPassword: "",
      formPasswordConfirmation: ""
    };
  },
  computed: {
    errorMessage() {
      return this.$store.state.errorMessage;
    }
  },
  methods: {
    signUp() {
      this.$store
        .dispatch("signUp", {
          name: this.formName,
          email: this.formEmail,
          password: this.formPassword,
          passwordConfirmation: this.formPasswordConfirmation
        })
        .then(() => {
          this.$router.replace({ path: "/" });
        });
    }
  }
};
</script>
<style scoped lang="sass"></style>
