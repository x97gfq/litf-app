<template>
  <div class="main">
    <br/>
    <br/>
    <br/>
    <br/>
    <img src="@/assets/eyes/blinking_eyes_test.gif" alt="blinking animal eyes"/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <p><router-link to="/">Back to Intro</router-link></p>

    <audio controls autoplay loop>
      <source src="@/assets/audio/forest.mp3" type="audio/ogg">
    </audio>

  </div>
</template>

<style lang="scss" scoped="true">
.main {
  background-image: url('~@/assets/backgrounds/Forest.png');
  height: 100%;
  background-repeat: repeat-x;
  background-size: contain;
}
a { 
  color: white;
}
</style>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Main',
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
            if (this.animals != null) {
              for(var i = 0; i < this.animals.length; i++) {
                console.log("animal: " + this.animals[i].name)
              }
            }
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