<template>
    <div class="shop">
        <h3>Visit these mental health resources :</h3>
        
    <br/>
    <br/>
    <br/>
    <br/>
        
    <router-link to="/contributors">Contributors</router-link>
    <br/>
    <br/>
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
.shop {
  color: white;
  padding-top: 20px;
  font-family: Baskerville;
}
</style>

<script>
export default {
  name: 'Shop'
}
</script>