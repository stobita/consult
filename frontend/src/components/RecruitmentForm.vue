<template>
  <div class="recruitment-form">
    <div class="form-item">
      <input v-model="formSubject" type="text" name="subject" />
    </div>
    <div class="form-item">
      <textarea v-model="formBody" id="" name="" cols="30" rows="10"></textarea>
    </div>
    <div class="form-item">
      <button type="button" @click="postRecruitment">募集を投稿する</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formSubject: "",
      formBody: ""
    };
  },
  methods: {
    postRecruitment() {
      this.$store.dispatch("postRecruitment", {
        subject: this.formSubject,
        body: this.formBody
      });
    }
  }
};
</script>
