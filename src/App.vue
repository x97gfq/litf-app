<template>
  <div id="app" class="bg">
    <router-view/>
  </div>
</template>

<style lang="scss">
body, html {
  height: 100%;
  margin: 0px;
}
a {
  color: white;
}
a:visited, a:hover {
  color: whitesmoke;
}
.bg {
  height: 100%;
  background-color: black;
}
#app {
  font-family: Baskerville, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#enterLink {
  font-family: Baskerville;
  padding-top: 30px;
  font-size: 18pt;
}
.bottom_nav {
  font-family: Baskerville;
  font-size: 12pt;
  position: absolute; 
  bottom: 20px; 
  width: 100%;
  margin: auto;
}
a {
  color: white;
}
</style>


