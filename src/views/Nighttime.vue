<template>
  <transition name="v">
    <div class="nighttime" v-if="show">
    
      <div v-if="checkIfDone" class="checkIfDone">
          <div class="alert alert-success" role="alert">
              <p>
                <b><router-link to="/Daytime" class="text-success">GO TO THE DAYTME REVEAL</router-link></b> 
              </p>
          </div>            
      </div>

      <div class="eyes" v-for="animal in animals" :key="animal.id">
        <div class="eye_holder">
          <img class="eye"
          v-bind:src="require('../assets/eyes/' + (animal.eye_state == 'open' ? animal.eyes_open : animal.eyes))"
          v-bind:alt="animal.name" 
          v-bind:title="animal.name" 
          v-on:click="showAnimal(animal)" style="cursor: pointer;"/>
        </div>
      </div>

      <div class="leaf">
        <img
        src = "@/assets/images/greenLeaf.png"
        height = "50"
        width = "50"
        v-on:click="showInfo('purple')" style="cursor: pointer;"
        />
      </div>   
      <div class="leaf">
        <img
        src = "@/assets/images/greenLeaf.png"
        height = "50"
        width = "50"
        v-on:click="showInfo('yellow')" style="cursor: pointer;"
        />
      </div> 
      <div class="leaf">
        <img
        src = "@/assets/images/greenLeaf.png"
        height = "50"
        width = "50"
        v-on:click="showInfo('green')" style="cursor: pointer;"
        />
      </div>
      
      <audio autoplay loop ref="forest_audio">
        <source src="@/assets/audio/forest.mp3" type="audio/ogg">
      </audio>

      <div class="bottom_nav">
        <div style="width: 100%; text-align: center;">
          <p>
            <router-link to="/">Home</router-link>
            <!--&nbsp;&nbsp;<a class="text-success" href="#" v-on:click="startOver" style="cursor: pointer;">Start Over</a>-->
          </p>
        </div>
        <!--
        <div style="width: 100%; text-align: center;">
          <div v-for="(animal) in animalsSorted" :key="animal.id" 
            v-bind:class="[animal.eye_state == 'open' ? 'progress_bar_item' : 'progress_bar_item_not_clicked']">
            <div v-if="animal.eye_state !== 'open'">
              <div class="progress_bar_image_holder">
                &nbsp;
              </div>
            </div>
            <div v-if="animal.eye_state == 'open'">
              <div class="progress_bar_image_holder">
                <img class="progress_bar_image"
                v-bind:src="require('../assets/eyes/' + animal.eyes)"
                v-bind:alt="animal.name" 
                v-bind:title="animal.name" 
                v-on:click="showAnimal(animal)" style="cursor: pointer;"/>
              </div>
              <span class="progress_bar_item_text">{{animal.name}}</span>
            </div>
          </div>
        </div>
        -->
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
/*.progress_bar_item_not_clicked { //to remove progress bar like this for now. 
  display: inline;
  float: left;
  width: 65px;
  height: 35px;
  padding: 2px;
  color: black;
  background-color: gray;
  border: solid silver 1px;
  border-radius: 10px;
  margin: 10px;
}
.progress_bar_item {
  display: inline;
  float: left;
  width: 65px;
  height: 35px;
  padding: 2px;
  color: silver;
  background-color: black;
  border: solid silver 1px;
  border-radius: 10px;
  margin: 10px;
}
.progress_bar_item_text {
  font-family: Arial;
  font-size: 8pt;
  position: relative;
  top: -25px;
}
.progress_bar_image_holder {
  width: 50px;
  height: 35px;
  max-height: 35px;
}
.progress_bar_image {
  max-width: 50px;
  max-height: 30px;
}*/
.eye_lower {
  padding-top: 100px;
  //padding-left: 10px;
  //padding-right: 10px;
}
.eye {
}
.eyes { 
  width: 100%;
}
.eye_holder {
  display: inline;
  float: left;
  width: 25%;
  height: 100px;
  margin-top: 100px;
}
.nighttime {
  //background-image: url('~@/assets/backgrounds/Forest.png');
  height: 100%;
  width: 100%;
  background-repeat: repeat-x;
  background-size: contain;
}
.checkIfDone {
  padding: 20px; 
  width: 400px; 
  margin: auto; 
  //padding-top: 100px;  
}
.leaf {
  display: inline;
  float: right;
  padding-top: 12%;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100;
}
.v-enter { /* starting style */
  opacity: 0;
}
.v-enter-active { /* active entering style */
  transition: opacity 3s ease-in; 
}
/*
.v-leave-active { 
  transition: opacity 0.5s ease-out; 
}
.v-leave-to { 
  opacity: 0;
}
*/
.alert {
  font-family: Baskerville;
  margin-top: 200px;
}
</style>

<script>
import LeafComponent from '../components/Leaf.vue'
import $ from 'jquery'
export default {
  name: 'Nighttime',
  components: {
  },
  data () {
    return {
      show: false,
      animals: null,
      loading: true,
      errored: false
    }
  },
  computed: {
    /*
    animalsClicked() {
        let animalList = '';
        $.each(this.animals, function(key, animal) {
            if (animal.eye_state === 'open') animalList += (animalList != '' ? ', ' : '') + animal.name;
        });
        return animalList;
    },
    */
    checkIfDone() {
        let done = true;
        $.each(this.animals, function(key, animal) {
            if (animal.eye_state === 'blink') done = false;
        });
        return done;
    },
  },
  methods:{
    startOver: function() {
        $.each(this.animals, function(key, animal) {
            animal.eye_state = 'blink';
        });
    },
    /*
    classNameByIndex: function (index) {
      return index % 2 == (0 || 1) ? 'eye' : 'eye_lower';
    },
    */
    showAnimal(animal) {
      animal.eye_state = 'open';
      console.log('show animal: ' + animal.name);
      //transition to animal page
      this.$parent.showModal(animal);
      //setTimeout(() => this.$router.push({ name: 'Animal', params: { animal: animal } }), 250);
    },
    getAnimals () {
      this.animals = this.$store.getters.getAnimalList;
    },
    showInfo (leafcolor) {
        this.$modal.show(
          LeafComponent,
          {leafColor: leafcolor},
          {draggable: true}
        )
    }
  },
  mounted() {
    this.show = true;
      if (this.$refs.forest_audio != null) {
        this.$refs.forest_audio.load();
        this.$refs.forest_audio.volume = 0.20;
        this.$refs.forest_audio.play();
      }
  },
  beforeMount(){
    this.getAnimals()
  }  
}
</script>