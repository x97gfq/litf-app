<template>
  <div class="message">

    <div class="message_text">
      <h3>{{ title }}</h3>
      <h3>{{ subtitle }}</h3>
      <p><router-link to="/Main">Enter</router-link></p>
    </div>

    <audio controls autoplay>
      <source src="@/assets/audio/1. Judy - It is Dark.wav" type="audio/ogg">
    </audio>

  </div>
</template>

<script>
export default {
  name: 'LightInTheForestIntro',
  props: {
    title: String,
    subtitle: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.message {
  height: 15em;
  color: white;
  font-size: 32pt;
  font-family: "Baskerville", Times;
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
}
a {
  color: white;
  font-size: 14pt;
}
</style>