<template>
  <transition name="v">
    <div class="cutscene" >  
      <router-link to="/Instructions">Instructions</router-link>
      <div class="quote-wrapper">
        <blockquote class="text">
          <p>Light In The Forest</p>
        </blockquote>
      </div>
    </div>
  </transition>
</template>




<style lang="scss" scoped>
.cutscene {
  color: rgb(0, 0, 0);
  padding-top: 20px;
  font-family: Baskerville;
  border-radius: 20%;
  -moz-border-radius: 20%;
  -webkit-border-radius: 20%;
  width: 100%;
  padding-top: 40px;

  margin-left: auto;
  margin-right: auto;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}
.quote-wrapper {
  width: 160px;
  height: 160px;
  position: relative;
  margin: 10vh auto 0; 
  
}
.text {
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    rgb(255, 208, 1) 0%,
    rgb(255, 208, 1) 70%,
    rgba(255, 213, 1, 0) 70.3%
  );
  position: relative;
  color: black;
  animation: glow 10s infinite ease-in-out;
  
}
.text p {
  height: 100%;
  font-size: 30px;
  line-height: 1.25;
  padding: 0;
  text-align: center;
  font-style: italic;
  font-family: Baskerville;
  text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.3);
}
.text::before {
  content: "";
  width: 50%;
  height: 100%;
  float: left;
  shape-outside: polygon(
    0 0,
    98% 0,
    50% 6%,
    23.4% 17.3%,
    6% 32.6%,
    0 50%,
    6% 65.6%,
    23.4% 82.7%,
    50% 94%,
    98% 100%,
    0 100%
  );
  shape-margin: 7%;
}
.text p::before {
  content: "";
  width: 50%;
  height: 100%;
  float: right;
  shape-outside: polygon(
    2% 0%,
    100% 0%,
    100% 100%,
    2% 100%,
    50% 94%,
    76.6% 82.7%,
    94% 65.6%,
    100% 50%,
    94% 32.6%,
    76.6% 17.3%,
    50% 6%
  );
  shape-margin: 7%;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px #d6c912, 0 0 10px black, 0 0 30px #d6c912, 0 0 40px #d6c912, 0 0 50px #d6c912, 0 0 60px #d6c912, 0 0 70px #d6c912;
  }
  to {
    box-shadow: 0 0 0px #d6c912;
  }
}

.v-enter { /* starting style */
  opacity: 0;
}
.v-enter-active { /* active entering style */
  transition: opacity 3s ease-in; 
}
/*
.v-leave-active { 
  transition: opacity 0.5s ease-out; 
}
.v-leave-to { 
  opacity: 0;
} 
*/
</style>

<script>

export default {
  name: 'Cutscene',
   data() {
    return {
      
      animals: null
    }
  },
  mounted(){
    
    //setTimeout(() => this.$router.push({ name: 'Instructions'}), 7000);
  }
}
</script>