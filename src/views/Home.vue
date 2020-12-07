<template>
  <div class="home">
    <img id="coverimg" src="@/assets/images/Lightintheforest_cover.jpg" v-on:click="goToIntro()"/>
    <p id="enterLink">
      <router-link to="/Intro">Start</router-link>
    </p>
    <p id = "aboutlink">
      <br>
      <br>
      <router-link to="/about">About</router-link>
    </p>
  </div>
</template>

<style scoped lang="scss">
.home {
  color: rgb(251,288,64);
}
#coverimg {
  border-radius: 20%;
  -moz-border-radius: 20%;
  -webkit-border-radius: 20%;
  display: none;
  width: 40%;
  padding-top: 40px;
}
</style>

<script>
import $ from 'jquery'

export default {
  name: 'Home',
  methods:{
    goToIntro() {
      this.$router.push({path: "/Intro"});
    },
  },
  mounted(){
    $("#coverimg").fadeIn(4000);
  }
}
</script>