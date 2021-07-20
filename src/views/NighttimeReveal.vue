<template>
  <div class="nighttime">
    <div class="alert alert-success" role="alert">
      <p>
        <b><router-link to="/Daytime" class="text-success">GO TO THE DAYTIME REVEAL</router-link></b> 
      </p>
    </div>            
    <video id="animal_video" ref="video" autoplay @click="close">
      <source v-bind:src="require('../assets/video/NighttimeReveal.mp4')" type="video/mp4">
    </video>
  </div>
</template>

<style scoped lang="scss">
.nighttime {
  font-family: Baskerville;
}
video {
  height: 100vh;
  width: 100vw;
  object-fit: fill;
}
.alert {
}
</style>

<script>
export default {
  name: 'NighttimeReveal',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods:{
    close() {
      this.$router.push({ name: 'Daytime'})
    },
  },
  mounted() {
  },
  beforeMount(){
  }  
}
</script>