<template>
  <div class="home"><RecruitmentForm /></div>
</template>

<script>
// @ is an alias to /src
import RecruitmentForm from "@/components/RecruitmentForm";

export default {
  name: "home",
  components: {
    RecruitmentForm
  },
  created() {
    this.$store.dispatch("fetchRecruitments");
  }
};
</script>
