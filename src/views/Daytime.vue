<template>
  <div class="home daytime">
    <div class="bottom_nav">
        <p>
            <router-link to="/">Home</router-link>
        </p>
        <audio autoplay loop id="forest_audio">
            <source src="@/assets/audio/daytime.wav" type="audio/ogg">
        </audio>   
    </div>
  </div>
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
  background-repeat: repeat-x;
  background-size: contain;
}
</style>

<script>
export default {
  name: 'Daytime'
}
</script>