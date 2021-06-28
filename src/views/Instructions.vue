<template>
  <div class="instructions">
    <h3>Instructions</h3>
    <br/>
    <br/>
    <p>
      Click on each eye and find a surprise waiting for you
    </p>
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
.instructions {
  color: white;
  padding-top: 20px;
  font-family: Baskerville;
}
</style>

<script>
export default {
  name: 'Instructions'
}
</script>