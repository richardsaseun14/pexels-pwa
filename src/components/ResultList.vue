<template>
  <div class="container">
    <div class="card-columns">
      <div v-for="photo in photos" :key="photo.id" class="card">
        <!-- <div class="rich-card" :style="{background: url(photo.src.medium)}"></div> -->
        <img @click="showImage(photo.id)" class="card-img" :src="photo.src.medium" alt="Card image" />
        <p class="text position-absolute text-white mb-0">
          <small>{{photo.photographer}}</small>
        </p>
      </div>
    </div>

    <b-modal static lazy id="modal" size="xl" centered>
      <template v-slot:modal-header="{ close }">
        <!-- Emulate built in modal header close button action -->
        <b-link target="_blank" :href="image.photgrapher_url">
          <h5>{{image.photographer}}</h5>
        </b-link>

        <b-button size="sm" variant="danger" @click="close()">Close</b-button>
      </template>

      <template v-slot:default="{ hide }">
        <img class="img-fluid" :src="image.src.original" alt="Card image" />
      </template>

      <template v-slot:modal-footer="{ ok, cancel, hide }">
        <!-- Button with custom close trigger value -->
        <b-button size="sm" variant="outline-success" target="_blank" :href="image.url">📷 Download</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { api } from "@/service.js";
export default {
  name: "ResultList",

  data() {
    return {
      image: null
    };
  },

  props: {
    photos: Array
  },

  methods: {
    showImage(id) {
      api.get(`/photos/${id}`).then(response => {
        this.image = response.data;
        this.$bvModal.show("modal");
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text {
  bottom: 2%;
  right: 2%;
}

.rich-card img {
  /* position: absolute; */
  /* content: ""; */
  /* height: 100%; */
  /* width: 100%; */
  /* top: 0; */
  /* left: 0; */
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(255, 255, 255, 0) 81%
  );
}
</style>
