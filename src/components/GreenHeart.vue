<template>
    <div class="heart">
      <p class = "popup">
        Mental Health resource goes here
      </p>
      <p>
        Current Latitude: {{ latitude }}<br/>
        Current Longitude: {{ longitude }}
      </p>
    </div>
</template>

<style scoped>

</style>

<script>
//import $ from 'jquery'

export default {
  name: 'Heart',
  props: {
  
  },

  methods: {

  },
  
  mounted() {
  
  },
  computed: {
    latitude() {
      if (this.$store.state.location != null) {
          return this.$store.state.location.coords.latitude;
      } else {
          return "";
      }
    },
    longitude() {
      if (this.$store.state.location != null) {
          return this.$store.state.location.coords.longitude;
      } else {
          return "";
      }
    }
  }
}
</script>

