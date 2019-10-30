<template>
  <b-input-group class="mt-3">
    <b-form-input v-model="search_string"></b-form-input>
    <b-input-group-append>
      <b-button @click="search" variant="info">Search</b-button>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
export default {
  data() {
    return {
      search_string: ""
    };
  },
  methods: {
    search() {
      this.$router.push({
        path: "results",
        query: { search: this.search_string }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>