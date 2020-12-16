<template>
    <div class="sponsors">
        <h3>Sponsors</h3>

        <p>Thank you to our sponsors:</p>

        <p>Sponsor1</p>
        <br/>

        <p>Sponsor2</p>
        <br/>

        <p>Sponsor3</p>
        <br/>

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
.sponsors {
  color: white;
  padding-top: 20px;
  font-family: Baskerville;
}
</style>

<script>
export default {
  name: 'Sponsors'
}
</script>