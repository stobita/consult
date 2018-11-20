<script>
export default {
  computed: {
    isSignIn() {
      const token = localStorage.getItem("jwt");
      return token ? true : false;
    }
  }
};
</script>
