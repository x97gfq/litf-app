<template>
  <transition name="v">
    <div class="home" v-if="show">
      <img id="coverimg" src="@/assets/images/Lightintheforest_cover.jpg" v-on:click="goToIntro()"/>
      <p id="enterLink">
        <router-link to="/Intro">Start</router-link>
      </p>
      <div class="bottom_nav">
        <router-link to="/about">About</router-link> | <router-link to="/instructions">Instructions</router-link> | <router-link to="/contributors">Contributors</router-link> | <router-link to="/sponsors">Sponsors</router-link> | <router-link to="/shop">Shop</router-link> | <router-link to="/mhw">Mental Health and Wellness Resources</router-link>
      </div>
    </div>
  </transition>
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
  /*display: none;*/
  width: 40%;
  padding-top: 40px;
}
.v-enter { /* starting style */
  opacity: 0;
}
.v-enter-active { /* active entering style */
  transition: opacity 3s ease-in; 
}
.v-leave-active { /* active leaving style */
  transition: opacity 0.5s ease-out; 
}
.v-leave-to { /* ending style */
  opacity: 0;
}
</style>

<script>
//import $ from 'jquery'

export default {
  name: 'Home',
   data() {
    return {
      show: false
    }
  },
  methods:{
    goToIntro() {
      this.$router.push({path: "/Intro"});
    },
  },
  mounted(){
    this.show = true;
  }
}
</script>