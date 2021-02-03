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
      var location = this.$store.getters.getLocation;
      if (location != null) {
          return location.coords.latitude;
      } else {
          return "";
      }
    },
    longitude() {
      var location = this.$store.getters.getLocation;
      if (location != null) {
          return location.coords.longitude;
      } else {
          return "";
      }
    }
  }
}
</script>

