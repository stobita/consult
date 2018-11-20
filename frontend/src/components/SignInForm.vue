<template>
  <div class="auth-form">
    <p v-if="errorMessage != ''">{{ errorMessage }}</p>
    <div class="form-item">
      <input
        v-model="formEmail"
        type="text"
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
      <button type="button" @click="signIn" name="signin" class="btn first">
        ログイン
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formEmail: "",
      formPassword: ""
    };
  },
  computed: {
    errorMessage() {
      return this.$store.state.errorMessage;
    }
  },
  methods: {
    signIn() {
      this.$store.dispatch("signIn", {
        email: this.formEmail,
        password: this.formPassword
      });
    }
  }
};
</script>
