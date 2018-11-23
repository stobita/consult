<template>
  <div class="home">
    <RecruitmentForm />
    <RecruitmentList :list="recruitments" />
  </div>
</template>

<script>
// @ is an alias to /src
import RecruitmentForm from "@/components/RecruitmentForm";
import RecruitmentList from "@/components/RecruitmentList";

export default {
  name: "home",
  components: {
    RecruitmentForm,
    RecruitmentList
  },
  created() {
    this.$store.dispatch("fetchRecruitments");
  },
  computed: {
    recruitments() {
      return this.$store.state.recruitments;
    }
  }
};
</script>
