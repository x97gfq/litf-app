<template>
    <div class="animal">
        <img @load="onImgLoad"
        v-bind:src="require('../assets/animals/' + image)"
        v-bind:alt="animal_name" 
        v-bind:title="animal_name" 
        id="animal_reveal" style="display: none;"/>

      <audio autoplay style="display: none;">
        <source v-bind:src="require('../assets/audio/' + sound)" type="audio/ogg">
      </audio>
    </div>
</template>

<style scoped>
.animal {
    background-color: black;
    color: rgb(251,288,64);
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
  methods: {
    onImgLoad () {
      //this method is fired when the image has finished loading
      console.log("image loaded, displayed, and dialog resized - width " + width + " height " + height);
      $("#animal_reveal").css("display", "inline");
      var width = $("#animal_reveal").width();
      var height = $("#animal_reveal").height();
      $(".vm--modal").width(width).height(height).css('top', '50px');
      //neet to reposition the dialog? (left margin too wide)
    }
  },
}
</script>