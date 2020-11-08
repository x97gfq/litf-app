<template>
  <div class="home">
    <LightInTheForest msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LightInTheForest from '@/components/LightInTheForest.vue'

export default {
  name: 'Home',
  components: {
    LightInTheForest
  }
}
</script>

