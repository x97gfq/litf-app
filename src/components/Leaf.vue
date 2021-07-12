<template>
    <div class="leaf">
      <div class="popup">
        <!-- This needs to be changed somthing welcoming and not clinical. -->
        <center> Resource: {{ selectedResource.name }}<br/></center>
        
        <div v-if="selectedResource.website != ''">
         <center>Website: 
          <a :href="selectedResource.website" target="new">
            {{ selectedResource.website }}
          </a></center>
        </div>
        
        <div v-if="selectedResource.description != ''">
          <center><a>{{ selectedResource.description }}</a></center>
        </div>
        
        <div v-if="selectedResource.maplink != ''">
          <center><p v-html="selectedResource.maplink"></p></center>
        </div>

      </div>
    </div>
</template>

<style scoped>
.leaf {
  color: black;
  padding: 20px;
  background: rgb(217, 219, 120);
  height: 100%;
  font-size: large;
}
a {
  color: black;
}
</style>

<script>
export default {
  name: 'Leaf',
  props: {
    leafColor: String  
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
      // iterate over resources and print the name of each to the console
      this.resources.forEach(resource => {
        console.log(resource.name)
        console.log(resource.latitude) /* this resource's latitude */
        console.log(resource.longitude) /* this resource's longitude */
      });
      //
      //
      // picking resources by color
      var newList = [];
      this.resources.forEach(resource => {
        if (resource.leaf === this.leafColor) {
          newList.push(resource);
        }
      });
      //
      //
      // pick a random resource of this color    
      var randomNumber = Math.floor(Math.random() * newList.length);
      this.selectedResource = newList[randomNumber];
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