<template>
  <div class="intro">
    <div class="message">
      <div class="message_text">
        <h3 id="msg1">{{ title }}</h3>
        <h3 id="msg2">{{ subtitle }}</h3>
        <p id="enterLink">
          <router-link to="/Nighttime">Enter</router-link>
        </p>
      </div>
    </div>
    <div class="bottom_nav">
      <p>
        <router-link to="/">Home</router-link>
      </p>
      <audio autoplay>
        <source src="@/assets/audio/1. Judy - It is Dark.wav" type="audio/ogg">
      </audio>
    </div>
  </div>
</template>

<style lang="scss" scoped="true">
#msg1, #msg2, #enterLink {
  display: none;
  font-size: 32pt !important;
}
div.message {
  height: 15em;
  color: white;
  font-size: 32pt;
  font-family: Baskerville, Times;
  position: relative;
}
div.message .message_text {
  color: rgb(251,288,64);
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 300px;
}
</style>

<script>
import $ from 'jquery'

export default {
  name: 'Intro',
  data: function() {
    return  {
      title: 'It is dark.',
      subtitle: 'Do not be afraid, there is light in the forest.'
    }
  },
  mounted(){
    $("#msg1").fadeIn(4000);
    $("#msg2").fadeIn(10000);
    setTimeout(function() {
      $("#enterLink").fadeIn(12000);
    },3000);
  }  
}
</script>