<template>
  <div class="about">
    <h3>About</h3>
    <br/>
    <router-link to="/contributors">Contributors</router-link>
    <br/>
    <br/>
    <br/>
    <br/>
    <p>
      <router-link to="/">Home</router-link>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.about {
  color: white;
  padding-top: 20px;
}
</style>

<script>
export default {
  name: 'About'
}
</script>