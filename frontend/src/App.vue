<template>
  <div id="app">
    <MainHeader />
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
  margin: 32px auto
</style>
