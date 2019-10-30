<template>
  <div class="results">
    <b-navbar sticky toggleable="md" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <img height="30" src="../assets/pexels.png" alt="Logo" />
        <span class="ml-4 d-none">
          <small>Pexels</small>
        </span>
      </b-navbar-brand>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-input-group class>
            <b-form-input></b-form-input>
            <b-input-group-append>
              <b-button variant="info">Search</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>

    <result-list :photos="photos"></result-list>
  </div>
</template>

<script>
import { api } from "@/service.js";
import ResultList from "@/components/ResultList";
export default {
  data() {
    return {
      data: {},
      photos: {}
    };
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
  }
};
</script>