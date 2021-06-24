<template>
  <transition name="v">
    <div class="home" v-if="show">
      <img id="coverimg" src="@/assets/images/litf_title_fade.gif" v-on:click="goToIntro()"/>
      <p id="enterLink">
        <router-link to="/Intro">Start</router-link>
      </p>
      <div class="bottom_nav">
        <router-link to="/about">About</router-link> | <router-link to="/instructions">Instructions</router-link> | <router-link to="/contributors">Contributors</router-link> | <router-link to="/sponsors">Sponsors</router-link><!-- | <router-link to="/shop">Shop</router-link>--> | <router-link to="/mhw">Mental Health and Wellness Resources</router-link>
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
  padding-top: 200px;
  max-width: 350px;
  padding-bottom: 100px;
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
import $ from 'jquery'

export default {
  name: 'Home',
   data() {
    return {
      show: false,
      animals: null
    }
  },
  methods:{
    clearPlayData: function() {
      $.each(this.animals, function(key, animal) {
          animal.eye_state = 'blink';
      });
    },
    goToIntro: function() {
      this.$router.push({path: "/Intro"});
    },
    getAnimals: function() {
      this.animals = this.$store.getters.getAnimalList;
    }
  },
  mounted(){
    this.show = true;
    this.getAnimals();
    this.clearPlayData();
  }
}
</script>