<template>
  <div class="home text-center h-100" :style="{backgroundImage: `url(${image})`}">
    <!-- <b-jumbotron header-tag="h4" fluid class="mb-0">
      <template v-slot:header>
        <img class alt="Vue logo" src="../assets/pexels.png" />
        <h4>Pexels</h4>
      </template>

      <template v-slot:lead>
        <p class>A Pexels Clone showcasing the best free stock photos shared by talented creators.</p>
      </template>

      <hr class="my-4" />

      <b-input-group class="mt-3">
        <b-form-input v-model="search_string"></b-form-input>
        <b-input-group-append>
          <b-button @click="search" variant="info">Search</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-jumbotron>-->

    <div class="container h-100 text-white">
      <div class="row h-100">
        <div class="col-12 my-auto">
          <img class alt="Vue logo" src="../assets/pexels.png" />
          <!-- <h4>Pexels</h4> -->
          <h3
            class
          >A Pexels Clone 📷 showcasing the best free stock photos shared by talented creators.</h3>
          <hr class="my-4 bg-white" />

          <b-input-group class="mt-3">
            <b-form-input v-model="search_string"></b-form-input>
            <b-input-group-append>
              <b-button @click="search" variant="light">🔍</b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { api } from "@/service.js";
import searchMixin from "@/mixins/searchMixin.js";

export default {
  name: "home",

  mixins: [searchMixin],

  data() {
    return {
      search_string: "",
      image: null
    };
  },

  methods: {
    setData(data) {
      this.image = data.data.photos[0].src.landscape;
    }
  },

  beforeRouteEnter(to, from, next) {
    // let data = {};
    const random = function() {
      return Math.random() * (10 - 1 + 1) + 1;
    };

    let url = `/curated?per_page=1&page=${random()}`;
    api.get(url).then(response => {
      next(vm => vm.setData(response));
    });
  }
};
</script>

<style>
.mt-space {
  margin-top: 121px;
  /* background-color: white; */
}
.home {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-blend-mode: luminosity; */
}
</style>
