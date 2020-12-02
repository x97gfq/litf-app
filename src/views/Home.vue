<template>
  <div class="home">
    <LightInTheForestIntro title="It is dark." subtitle="Don't be afraid, there is light in the forest."/>
  </div>
</template>

<script>
// @ is an alias to /src
import LightInTheForestIntro from '@/components/LightInTheForestIntro.vue'

export default {
  name: 'Home',
  components: {
    LightInTheForestIntro
  },
  methods:{
  },
  beforeMount(){
  }  
}
</script>