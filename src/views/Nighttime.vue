<template>
  <div class="nighttime">
    
    <table class="eyes">
      <tr>
        <td v-for="(animal, index) in animals" :key="animal.id" style="width: 10%;">
          <img 
          v-bind:class="classNameByIndex(index)"
          v-bind:src="require('../assets/eyes/' + animal.eyes)"
          v-bind:alt="animal.name" 
          v-bind:title="animal.name" 
          v-on:click="showAnimal(animal)" style="cursor: pointer;"/>
        </td>
      </tr>
    </table>

    <div class="bottom_nav">
      <p><router-link to="/">Home</router-link></p>
      <audio autoplay loop >
        <source src="@/assets/audio/forest.mp3" type="audio/ogg">
      </audio>
    </div>
  </div>
</template>

<style scoped lang="scss">
.eye {
  width: 80px;
}
.eye_lower {
  width: 150px;
  padding-top: 100px;
}
.eyes { 
  top: 50%;
  position: absolute; 
  width: 100%;
  bottom: 150px; 
  margin: auto;
}
.nighttime {
  background-image: url('~@/assets/backgrounds/Forest.png');
  height: 100%;
  background-repeat: repeat-x;
  background-size: contain;
}
</style>

<script>
import axios from 'axios'
import AnimalComponent from '../components/Animal.vue'

export default {
  name: 'Nighttime',
  components: {
  },
  data () {
    return {
      animals: null,
      loading: true,
      errored: false
    }
  },
  methods:{
    classNameByIndex: function (index) {
      return index % 2 == (0 || 1) ? 'eye' : 'eye_lower';
    },
    showAnimal(animal) {
      console.log("show animal: " + animal.name)
      this.show(animal)
    },
    show (animal) {
      this.$modal.show(
        AnimalComponent,
        { 
          animal_name: animal.name,
          image: animal.image,
          sound: animal.sound
        },
        { draggable: true }
      )
        //this.$modal.show('animal-modal');
    },
    hide () {
        this.$modal.hide('animal-modal');
    },
    async getAnimals () {
      this.loading = true;
      try {
        axios.get('https://litf-api.azurewebsites.net/api/animals')
          .then(response => {
            this.animals = response.data
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
          .finally(() => {
            this.loading = false
          }
        )
      } catch (err) {
        console.log(err);
      }
    }
  },
  beforeMount(){
    this.getAnimals()
  }  
}
</script>