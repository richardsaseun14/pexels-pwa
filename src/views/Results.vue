<template>
  <div class="results">
    <b-navbar sticky toggleable="md" type="dark" variant="dark" class="mb-4">
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

    <div class="container">
      <h4 class="text-capitalize m-0">{{$route.query.search}} Images</h4>
      <p class="text-info">{{data.data.total_results}} images</p>
    </div>

    <result-list :photos="photos"></result-list>

    <div class="overflow-auto">
      <b-pagination-nav
        first-text="⏮"
        prev-text="⏪"
        next-text="⏩"
        last-text="⏭"
        :link-gen="linkGen"
        :number-of-pages="pages"
        use-router
        align="center"
      >
        <template v-slot:ellipsis-text>
          <b-spinner small type="grow"></b-spinner>
        </template>
      </b-pagination-nav>
    </div>

    <div class="container text-center mb-5">
      <p class="m-0">Photos provided by</p>
      <b-link href="ww.pexels.com" target="_blank">
        <img
          height="15"
          src="https://www.pexels.com/assets/pexels-logo-7e4af4630e66b6b786567041874586aeb1b5217589035c70a0def15aacd0f11a.png"
          alt="pexels logo"
        />
      </b-link>
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
      photos: {},
      test: ""
    };
  },

  computed: {
    pages() {
      return this.data.data.total_results / 20;
    }
  },

  components: {
    ResultList
  },

  methods: {
    setData(data) {
      this.data = data;
      this.photos = data.data.photos;
    },

    linkGen(pageNum) {
      // console.log("fare");
      // this.text = route;
      return {
        path: "/results",
        query: { search: this.$route.query.search, page: pageNum }
      };
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