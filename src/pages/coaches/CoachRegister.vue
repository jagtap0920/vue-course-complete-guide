<template>
  <section>
    <base-card>
      <h1>Register as a coach</h1>
      <coach-registration
        @submit-register-coach="submitRegisteroach"
      ></coach-registration>
    </base-card>
  </section>
</template>

<script>
import CoachRegistration from '../../components/coaches/CoachRegistration.vue';
export default {
  components: {
    CoachRegistration,
  },
  methods: {
    submitRegisteroach(formData) {
      this.$store.dispatch('coaches/registerCoach', formData);
      this.$router.replace('/coaches');
    },
  },
};
</script>

<style></style>
