<template>
  <div class="home">
    <img id="coverimg" src="@/assets/images/Lightintheforest_cover.jpg" v-on:click="goToIntro()"/>
    <p id="enterLink">
      <router-link to="/Intro">Start</router-link>
    </p>
    <div class="bottom_nav">
      <router-link to="/about">About</router-link> | <router-link to="/instructions">Instructions</router-link> | <router-link to="/contributors">Contributors</router-link> | <router-link to="/sponsors">Sponsors</router-link> | <router-link to="/shop">Shop</router-link> | <router-link to="/mhw">Mental Health and Wellness Resources</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  color: rgb(251,288,64);
  font-family: Baskerville;
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