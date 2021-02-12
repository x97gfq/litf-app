<template>
    <div class="heart">
      <p class = "popup">
        Resource: {{ selectedResource.name }}<br/>
        Website: 
        <a :href="selectedResource.website" target="new">
          {{ selectedResource.website }}
        </a>
      </p>
    </div>
</template>

<style scoped>
a {
  color: blue;
}
</style>

<script>
export default {
  name: 'Heart',
  props: {
  
  },
  data () {
    return {
      resources: [],
      selectedResource: []
    }
  },
  methods: {
    getResources () {
      this.resources = this.$store.getters.getResourceList;
    },
    chooseResource () {
      // need algorithm to choose nearest resource (using latitude/longitude?)
      // if location data is available
      //
      //
      console.log(this.latitude); // <-- our current latitude
      console.log(this.longitude); // <-- our current longitude
      //
      //
      // iterate over resources and print the name of each
      this.resources.forEach(resource => {
        console.log(resource.name)
        console.log(resource.latitude) /* this resource's latitude */
        console.log(resource.longitude) /* this resource's longitude */
      });
      //
      //
      // for now, use the first resource in the list (assign resources[0] to selectedResource
      this.selectedResource = this.resources[0];
      //
      //
      console.log(this.selectedResource);
      //
      //
    }
  },
  mounted() {
    this.getResources();
    this.chooseResource();
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