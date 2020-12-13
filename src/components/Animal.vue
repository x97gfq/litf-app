<template>
    <div class="animal">

        <img @load="onImgLoad"
        v-bind:src="require('../assets/animals/' + image)"
        v-bind:alt="animal_name" 
        v-bind:title="animal_name" 
        id="animal_reveal" class="animal_img" style="display: none;"/>

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
.animal_img {

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
      $("#animal_reveal").fadeIn(3000);
      
      var width = $("#animal_reveal").width();
      var height = $("#animal_reveal").height();
      
      var viewportWidth = $(window).width();
      //var viewportHeight = $(window).width();

      var leftMargin = (viewportWidth > width ? ((viewportWidth-width)/2) : 50);

      $(".vm--modal").css({top:50, left: leftMargin, width: width, height: height });
    }
  },
}
</script>

