<template>
  <div class="home">
    <LightInTheForest msg="It is dark."/>
  </div>
</template>

<script>
// @ is an alias to /src
import LightInTheForest from '@/components/LightInTheForest.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    LightInTheForest
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
        axios.get('http://litf-api.azurewebsites.net/api/animals')
          .then(response => {
            this.animals = response.data
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
          .finally(() => {
            this.loading = false

            for(var i = 0; i < this.animals.length; i++) {
              console.log("animal: " + this.animals[i].name)
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