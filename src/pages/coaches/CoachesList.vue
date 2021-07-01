<template>
  <h1>Coaches List</h1>
  <ul v-if="hasCoaches">
    <li v-for="coach in filteredCoaches" :key="coach.id">
      {{ coach.firstName }}
    </li>
  </ul>
  <h3 v-else>No coaches found</h3>
</template>

<script>
export default {
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
};
</script>

<style></style>
