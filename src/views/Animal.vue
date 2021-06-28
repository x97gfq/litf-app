<template>
    <div class="animal" >
        <!--<h1>Light in the Forest</h1>-->
        <p>
            <router-link to="/nighttime">Back to Nighttime</router-link>
        </p>
        <video controls autoplay>
            <source v-bind:src="require('../assets/video/' + animal.night_video)" type="video/mp4">
        </video>
    </div>
</template>

<style scoped lang="scss">
.animal {
    color: rgb(251,288,64);
    font-family: Baskerville;
    background: rgba(0, 0, 0, 0.5);
    color: #f1f1f1;
}
video {
    width: 60%;
}
</style>

<script>
export default {
  name: 'Animal',
  props: {
      animal: Object
  },
  methods: {
    onImgLoad () {
    }
  },
}
</script>





