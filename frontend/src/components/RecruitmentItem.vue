<template>
  <div class="container">
    <div class="subject">{{ item.subject }}</div>
    <div class="body">{{ item.body }}</div>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style scoped lang="sass">
.container
  height: 96px
  background: white
  margin-bottom: 16px
  border-radius: 4px
  padding: 16px
  .subject
    font-weight: bold
    margin-bottom: 8px
</style>
