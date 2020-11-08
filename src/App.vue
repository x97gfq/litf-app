<template>
  <div id="app" class="bg">
    <router-view/>
    <div id="nav">
      <h4>Light in the Forest</h4>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- audio source: http://soundbible.com/951-Nightime.html -->
    <audio controls autoplay loop>
      <source src="@/assets/audio/nighttime.mp3" type="audio/ogg">
    </audio>
  </div>
</template>

<style lang="scss">
body, html {
  height: 100%;
  margin: 0px;
}
.bg {
  background-image: url('~@/assets/backgrounds/Forest.png');
  height: 100%;
  background-repeat: repeat-x;
  background-size: contain;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  width: 100%;
  position: absolute; 
  padding-bottom: 10px;
  bottom: 0;
  background-color: #faf6a2;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
