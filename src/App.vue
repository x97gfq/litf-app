<template>
  <div id="app" class="bg">
    <router-view/>
    <div id="nav">
      <!--<router-link to="/">Home</router-link> |-->
      <!--<h4>Light in the Forest</h4>-->
      <!--
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      -->
    </div>
  </div>
</template>

<style lang="scss">
body, html {
  height: 100%;
  margin: 0px;
}
.bg {
  height: 100%;
  background-color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#nav {
  width: 100%;
  position: absolute; 
  padding-bottom: 10px;
  bottom: 0;
  background-color: #000000;
  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: yellow;
    }
  }
}
</style>
