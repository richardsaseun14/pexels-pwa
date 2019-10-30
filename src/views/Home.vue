<template>
  <div class="home text-center">
    <div>
      <b-jumbotron header-tag="h4" fluid style="height: 100vh" class="mb-0">
        <template v-slot:header>
          <img class="mt-space" alt="Vue logo" src="../assets/pexels.png" />
          <h4>Pexels</h4>
        </template>

        <template v-slot:lead>
          <p class>The best free stock photos & videos shared by talented creators.</p>
        </template>

        <hr class="my-4" />

        <b-input-group class="mt-3">
          <b-form-input v-model="search_string"></b-form-input>
          <b-input-group-append>
            <b-button @click="search" variant="info">Search</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-jumbotron>
    </div>

    <!-- <div class="container">
      <div class="row">
        <div class="col-12 bg-warning" style="height:100vh">
          <img class="my-auto" alt="Vue logo" src="../assets/pexels.png" />
          <b-input-group class="mt-3">
          <b-form-input></b-form-input>
          <b-input-group-append>
            <b-button variant="info">Search</b-button>
          </b-input-group-append>
        </b-input-group>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
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

<style>
.mt-space {
  margin-top: 121px;
  /* background-color: white; */
}
</style>
