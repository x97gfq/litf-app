<template>
  <div id="app" class="bg">
    <router-view/>
    <AnimalModal ref="animalModal" v-show="isModalVisible" :animal="animal" @close="closeModal" />
  </div>
</template>

<style lang="scss">
body, html {
  height: 100%;
  margin: 0px;
  font-family: Baskerville;
}
a {
  color: white;
}
a:visited, a:hover {
  color: whitesmoke;
}
.bg {
  height: 100%;
  background-color: black;
}
#app {
  font-family: Baskerville, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#enterLink {
  font-family: Baskerville;
  padding-top: 30px;
  font-size: 18pt;
}
.bottom_nav {
  font-family: Baskerville;
  font-size: 12pt;
  position: absolute; 
  bottom: 0px; 
  width: 100%;
  margin: auto;
}
a {
  color: white;
}
/* hack */
.vm--modal {
  border-radius: 25px !important;
}
</style>

<script>
import AnimalList from './assets/json/animal_list.json'
import ResourceList from './assets/json/resource_list.json'
import AnimalModal from "./components/AnimalModal.vue";

export default {
  name: 'App',
  data () {
    return {
      isModalVisible: false,
      animal: null
    }
  },
  components: {
    AnimalModal
  },
  methods:{
    showModal(animal) {
      this.isModalVisible = true;
      this.animal = animal;
      
      var child = this.$refs.animalModal;
      child.playAnimalSound();
    },
    closeModal() {
      this.isModalVisible = false;
    },  
    setupAnimals () {
      var list = AnimalList.animals;
      list.sort(function(){return 0.5 - Math.random()});
      this.$store.commit("setAnimalList", list);
    },
    setupResources () {
      var list = ResourceList.resources;
      this.$store.commit("setResourceList", list);
    },
    setupGeoLocation() {
        //do we support geolocation
        if (!("geolocation" in navigator)) {
            console.log("Geolocation is not available.");
            return;
        }

        //get current position (latitude/longitude)
        navigator.geolocation.getCurrentPosition(pos => {
          //this.location = pos;
          console.log(pos);

          this.$store.commit("setLocation", pos);

        }, err => { 
          console.log("Error Getting GeoLocation: " + err.message);
        })
    }
  },
  mounted(){
    this.setupAnimals();
    this.setupResources();
    this.setupGeoLocation();
  }
}
</script>

