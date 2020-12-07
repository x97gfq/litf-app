<template>
    <div class="animal">
        <img class="animal_image" 
        v-bind:src="require('../assets/animals/' + image)"
        v-bind:alt="animal_name" 
        v-bind:title="animal_name"/>

      <audio autoplay>
        <source v-bind:src="require('../assets/audio/' + sound)" type="audio/ogg">
      </audio>
    </div>
</template>

<style scoped>
.animal {
    background-color: black;
    color: yellow;
    height: 100%;
}
.animal_image {
    width: 90%;
    height: auto;
    margin: auto;
}
</style>

<script>
export default {
  name: 'Animal',
  props: {
      animal_name: String,
      image: String,
      sound: String
  }
}
</script>