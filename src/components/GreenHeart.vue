<template>
    <div class="heart">
      <p class = "popup">
        Mental Health resource goes here
      </p>
      <p>
        Current Latitude: {{ latitude }}<br/>
        Current Longitude: {{ longitude }}<br/>
      </p>

      <div v-for="(resource, index) in resources" :key="resource.id">
        {{ index }} - {{ resource.name }}
      </div>

    </div>
</template>

<style scoped>

</style>

<script>
export default {
  name: 'Heart',
  props: {
  
  },
  data () {
    return {
      resources: []
    }
  },
  methods: {
    getResources () {
      this.resources = this.$store.getters.getResourceList;
    }
  },
  mounted() {
    this.getResources();
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