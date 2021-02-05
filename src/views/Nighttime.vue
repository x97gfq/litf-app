<template>
  <div class="nighttime">
  
    <div v-if="checkIfDone" class="checkIfDone">
        <div class="alert alert-success" role="alert">
            You have clicked all of the animals 
            <p class="text-success">
              <b><router-link to="/Daytime" class="text-success">DAYTME REVEAL</router-link></b> | 
              <a class="text-success" href="#" v-on:click="startOver" style="cursor: pointer;">Start Over</a> |
              <router-link to="/" class="text-success">Home</router-link> 
            </p>
        </div>            
    </div>

    <table class="eyes">
      <tr>
        <td v-for="(animal, index) in animals" :key="animal.id" style="width: 10%;">

          <img 
          v-if="animal.eye_state == 'blink'"
          v-bind:class="classNameByIndex(index)"
          v-bind:src="require('../assets/eyes/' + animal.eyes)"
          v-bind:alt="animal.name" 
          v-bind:title="animal.name" 
          v-on:click="showAnimal(animal)" style="cursor: pointer;"/>

          <img 
          v-if="animal.eye_state == 'open'"
          v-bind:class="classNameByIndex(index)"
          v-bind:src="require('../assets/eyes/' + animal.eyes_open)"
          v-bind:alt="animal.name" 
          v-bind:title="animal.name" 
          v-on:click="showAnimal(animal)" style="cursor: pointer;"/>

        </td>
      </tr>
    </table>

    <div class = heart>

      <img
      src = "@/assets/images/greenhearttransparent2.png"
      height = "50"
      width = "50"
      v-on:click="showInfo()" style="cursor: pointer;"
      />

    </div>    

    <div class="bottom_nav">
      <p>
         <router-link to="/">Home</router-link> | 
         <router-link to="/Daytime">(daytime preview)</router-link>
      </p>
      <audio autoplay loop id="forest_audio">
        <source src="@/assets/audio/forest.mp3" type="audio/ogg">
      </audio>
      <div v-if="animalsClicked != null && animalsClicked.length > 0" style="background-color: gray; color: yellow; width: 30%;">
          Viewed: <span>{{ animalsClicked }}</span>
      </div>      
    </div>
  </div>
</template>

<style scoped lang="scss">
.eye_lower {
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
.checkIfDone {
  padding: 20px; 
  width: 400px; 
  margin: auto; 
  padding-top: 100px;  
}
.heart {
  padding-top: 350px;
  padding-left: 75%;
}
</style>

<script>
import AnimalComponent from '../components/Animal.vue'
import GreenHeartComponent from '../components/GreenHeart.vue'
import $ from 'jquery'

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
  computed: {
    animalsClicked() {
        let animalList = '';
        $.each(this.animals, function(key, animal) {
            if (animal.eye_state === 'open') animalList += (animalList != '' ? ', ' : '') + animal.name;
        });
        return animalList;
    },
    checkIfDone() {
        let done = true;
        $.each(this.animals, function(key, animal) {
            if (animal.eye_state === 'blink') done = false;
        });
        return done;
    }
  },
  methods:{
    startOver: function() {
        $.each(this.animals, function(key, animal) {
            animal.eye_state = 'blink';
        });
    },
    classNameByIndex: function (index) {
      return index % 2 == (0 || 1) ? 'eye' : 'eye_lower';
    },
    showAnimal(animal) {
      animal.eye_state = 'open';
      console.log('show animal: ' + animal.name)
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
    getAnimals () {
      this.animals = this.$store.getters.getAnimalList;
    },
    adjustSoundLevel(elementId, level) {
      var aud = document.getElementById(elementId);
      aud.volume = level;
    },
    showInfo () {
        this.$modal.show(
          GreenHeartComponent,
          {

          },
          {draggable: true}
        )
    }
  },
  mounted() {
    this.adjustSoundLevel('forest_audio',0.20);
  },
  beforeMount(){
    this.getAnimals()
  }  
}
</script>