<template>
  <div class="nighttime">
    
    <!-- https://euvl.github.io/vue-js-modal/Intro.html#dynamic-modals -->
    <modal name="animal-modal">
        <div style="width: 100%; height: 100%; background-color: black; color: yellow;">
          Animal popup
        </div>
    </modal>

    <table class="eyes">
      <tr>
        <td v-for="animal in animals" :key="animal.id" style="width: 10%;">
          <img class="eye" 
          src="@/assets/eyes/blinking_eyes_test.gif"
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
  width: 120px;
}
.eyes { 
  top: 65%;
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
    showAnimal(animal) {
      console.log("show animal: " + animal.name)
      this.show()
    },
    show () {
        this.$modal.show('animal-modal');
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