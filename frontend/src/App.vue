<template>
  <div id="app">
    <MainHeader />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="content"><router-view /></div>
  </div>
</template>

<script>
import "normalize.css";
import MainHeader from "@/components/MainHeader";
export default {
  components: {
    MainHeader
  }
};
</script>

<style lang="sass">
html
  height: 100%
body
  height: 100%
</style>

<style scoped lang="sass">
#app
  background: $content-bg
  min-height: 100%
.content
  width: $main-width
  margin: 0 auto
</style>
