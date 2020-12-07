<template>
  <div class="about">
    <h3>About</h3>
    
    <p>This project...</p>
    
    <br/>
    <br/>
    <br/>

    <h5>More Info:</h5>
    <router-link to="/contributors">Contributors</router-link>
    <br/>
    <router-link to="/instructions">Instructions</router-link>
    <br/>
    <br/>
    <br/>
    <div class="bottom_nav">
      <p>
        <router-link to="/">Home</router-link>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  color: white;
  padding-top: 20px;
  font-family: Baskerville;
}
</style>

<script>
export default {
  name: 'About'
}
</script>