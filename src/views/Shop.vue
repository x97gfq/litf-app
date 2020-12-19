<template>
    <div class="shop">
        <h3>Shop page</h3>
        <p>maybe some pictures here?</p>
    <br/>
        <p>Visit the page below to support the artist</p>
        <a href="https://hollycarr.weebly.com/store.html" target="_blank">Holly's Shop</a>
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