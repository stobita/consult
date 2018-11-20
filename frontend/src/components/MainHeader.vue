<template>
  <div class="container">
    <div class="content">
      <div class="title"><router-link to="/">consult</router-link></div>
      <div class="nav">
        <div v-if="!isSignIn">
          <router-link to="/signin">ログイン</router-link>
        </div>
        <div v-else><router-link to="/">相談相手を募集する</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
import Authentication from "@/mixins/Authentication";
export default {
  mixins: [Authentication]
};
</script>

<style scoped lang="sass">
.container
  background: $main-bg
  color: $main-text
  padding: 8px
  .content
    display: flex
    justify-content: space-between
    width: $main-width
    margin: 0 auto
    .title
      a
        color: $main-text
        text-decoration: none
        font-weight: bold
    .nav
      a
        color: $main-text
        text-decoration: none
        font-weight: bold
</style>
