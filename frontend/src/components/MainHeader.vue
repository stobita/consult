<template>
  <div class="container">
    <div class="content">
      <div class="title">consult</div>
      <div class="nav"><router-link to="/signin">ログイン</router-link></div>
    </div>
  </div>
</template>

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
      font-weight: bold
    .nav
      a
        color: $main-text
        text-decoration: none
        font-weight: bold
</style>
