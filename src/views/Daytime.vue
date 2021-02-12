<template>
  <transition name="v">
    <div class="home daytime" v-if="show">
      <div class="bottom_nav">
          <p>
              <router-link to="/">Home</router-link>
          </p>
          <audio autoplay loop id="forest_audio">
              <source src="@/assets/audio/daytime.wav" type="audio/ogg">
          </audio>   
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
  display: none;
  height: 100%;
}
.daytime {
  background-image: url('~@/assets/backgrounds/daytimebackground.jpg');
  height: 100%;
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
export default {
  name: 'Daytime',
  data: function() {
    return  {
      show: false
    }
  },
  mounted(){
    this.show = true;
  }  
}
</script>