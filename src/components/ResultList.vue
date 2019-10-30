<template>
  <div class="container">
    <div class="card-columns">
      <div v-for="photo in photos" :key="photo.id" class="card">
        <!-- <div class="rich-card" :style="{background: url(photo.src.medium)}"></div> -->
        <img class="card-img" :src="photo.src.medium" alt="Card image" />
        <p class="text position-absolute text-white mb-0">
          <small>{{photo.photographer}}</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultList",
  props: {
    photos: Array
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
