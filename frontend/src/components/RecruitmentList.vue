<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      <RecruitmentItem :item="item" />
    </li>
  </ul>
</template>

<script>
import RecruitmentItem from "@/components/RecruitmentItem";
export default {
  props: ["list"],
  components: {
    RecruitmentItem
  }
};
</script>
