<template>
  <div class="main">

    <table class="eyes">
      <tr>
        <td>
          <br/>
          <br/>
          <img class="eye" src="@/assets/eyes/blinking_eyes_test.gif" alt="blinking animal eyes"/>
        </td>
        <td>
          <img class="eye" src="@/assets/eyes/blinking_eyes_test.gif" alt="blinking animal eyes"/>
        </td>
        <td>
          <br/>
          <br/>
          <img class="eye" src="@/assets/eyes/blinking_eyes_test.gif" alt="blinking animal eyes"/>
        </td>
        <td>
          <img class="eye" src="@/assets/eyes/blinking_eyes_test.gif" alt="blinking animal eyes"/>
        </td>
        <td>
          <br/>
          <br/>
          <img class="eye" src="@/assets/eyes/blinking_eyes_test.gif" alt="blinking animal eyes"/>
        </td>
        <td>
          <img class="eye" src="@/assets/eyes/blinking_eyes_test.gif" alt="blinking animal eyes"/>
        </td>
        <td>
          <img class="eye" src="@/assets/eyes/blinking_eyes_test.gif" alt="blinking animal eyes"/>
        </td>
      </tr>
    </table>

    <div class="bottom_nav">
      <p><router-link to="/">Back to Intro</router-link></p>
      <audio controls autoplay loop>
        <source src="@/assets/audio/forest.mp3" type="audio/ogg">
      </audio>
    </div>
  </div>
</template>

<style lang="scss" scoped="true">
.eye {
  width: 150px;
}
.eyes { 
  position: absolute; 
  width: 100%;
  bottom: 150px; 
  margin: auto;
}
.main {
  background-image: url('~@/assets/backgrounds/Forest.png');
  height: 100%;
  background-repeat: repeat-x;
  background-size: contain;
}
a { 
  color: white;
}
.bottom_nav {
  position: absolute; 
  bottom: 20px; 
  width: 100%;
  margin: auto;
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