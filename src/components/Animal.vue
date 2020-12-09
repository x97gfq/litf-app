animal.vue

<template>
    <div class="animal">
        <img 
        v-bind:src="require('../assets/animals/' + image)"
        v-bind:alt="animal_name" 
        v-bind:title="animal_name" 
        id="animal_reveal"/>

      <audio autoplay style="display: none;">
        <source v-bind:src="require('../assets/audio/' + sound)" type="audio/ogg">
      </audio>
    </div>
</template>

<style scoped>
.animal {
    background-color: black;
    color: yellow;
}
</style>

<script>
import $ from 'jquery'

export default {
  name: 'Animal',
  props: {
      animal_name: String,
      image: String,
      sound: String
  },
  mounted() {
    //hackish setTimeout... don't like it
    setTimeout(function() {
      var width = $("#animal_reveal").width();
      var height = $("#animal_reveal").height();
      console.log("width " + width + " height " + height);

      $(".vm--modal").width(width).height(height).css('top', '50px');

    },100);
  }
}
</script>

