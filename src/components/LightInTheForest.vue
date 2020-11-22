<template>
  <div class="message">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'LightInTheForest',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.message {
  height: 15em;
  color: white;
  font-size: 32pt;
  font-family: "Book Antiqua", Times;
  position: relative;
}
div.message h1 {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
}
</style>