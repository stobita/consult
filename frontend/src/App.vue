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

<style scoped lang="sass">
.content
  width: $main-width
  margin: 0 auto
</style>
