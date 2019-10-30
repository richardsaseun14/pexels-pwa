<template>
  <div class="results">
    <b-navbar sticky toggleable="md" type="dark" variant="dark">
      <div class="container">
        <b-navbar-brand to="/">
          <img height="30" src="../assets/pexels.png" alt="Logo" />
          <span class="ml-4 d-none">
            <small>Pexels</small>
          </span>
        </b-navbar-brand>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-input-group class>
              <b-form-input v-model="search_string"></b-form-input>
              <b-input-group-append>
                <b-button variant="outline-info" @click="search">Search</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-nav-form>
        </b-navbar-nav>
      </div>
    </b-navbar>
    <!-- end navigation  -->

    <result-list :photos="photos"></result-list>

    <div class="overflow-auto">
      <b-pagination-nav :link-gen="linkGen" :number-of-pages="pages" use-router></b-pagination-nav>
    </div>
  </div>
</template>

<script>
import searchMixin from "@/mixins/searchMixin.js";

import { api } from "@/service.js";
import ResultList from "@/components/ResultList";
export default {
  mixins: [searchMixin],
  data() {
    return {
      search_string: "",
      data: {},
      photos: {}
    };
  },

  computed: {
    pages() {
      return data.data.total_results / 20;
    }
  },

  components: {
    ResultList
  },

  methods: {
    setData(data) {
      this.data = data;
      this.photos = data.data.photos;
    }
  },

  beforeRouteEnter(to, from, next) {
    // let data = {};
    let url = `/search?query=${to.query.search}&per_page=20&page=${
      to.query.page ? to.query.page : 1
    }`;
    api.get(url).then(response => {
      next(vm => vm.setData(response));
    });
  },

  beforeRouteUpdate(to, from, next) {
    this.photos = null;
    this.data = null;
    let url = `/search?query=${to.query.search}&per_page=20&page=${
      to.query.page ? to.query.page : 1
    }`;
    api.get(url).then(response => {
      this.setData(response);
      next();
    });
  }
};
</script>