export default {
  methods: {
    search() {
      this.$router.push({
        path: "results",
        query: { search: this.search_string }
      });
    }
  }
};
