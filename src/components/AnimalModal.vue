<template>
  <transition name="animal-modal-fade">
    <div class="animal-modal-backdrop">
      <div id="animal_modal" class="animal-modal" v-if="animal != null">

        <div v-if="animal.night_video !== ''" style="background-color: black;">
          <video id="animal_video" ref="video" autoplay @click="close">
            <source v-bind:src="require('../assets/video/' + animal.night_video)" type="video/mp4">
          </video>

          <audio ref="audio" autoplay style="display: none;">
            <source v-bind:src="require('../assets/audio/' + animal.sound)" type="audio/ogg">
          </audio>

        </div>
        <div v-if="animal.night_video === ''" style="background-color: black;">
          <div class="error">
            <p style="color: red;">Error loading video.</p>
            <input type="button" @click="close" value="close"/>
          </div>
        </div>

      </div>
    </div>
  </transition>
</template>

<style>
.animal-modal-fade-enter,
.animal-modal-fade-leave-active {
  opacity: 0;
}
.animal-modal-fade-enter-active,
.animal-modal-fade-leave-active {
  transition: opacity 1s ease;
}
.animal-modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.animal-modal {
  border-radius: 25px !important;
  background: #5c5c5c;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
}
.error {
  height: 100vh;
  width: 100vw;
  color: red;
}
video {
    height: 100vh;
    width: 100vw;
    object-fit: fill;
}
</style>

<script>
export default {
  name: "AnimalModal",
  props: {
      animal: null
  },
  methods: {
    close() {
      if (this.$refs.video != null) this.$refs.video.pause();
      if (this.$refs.audio != null) this.$refs.audio.pause();
      this.$emit("close");
    },
    playAnimalNightVideo() {
      console.log("playAnimalNightVideo");
      if (this.$refs.video != null) {
        this.$refs.video.load();
        this.$refs.video.play();
      }
    },    
    playAnimalSound() {
      console.log("playAnimalSound");
      if (this.$refs.audio != null) {
        this.$refs.audio.load();
        this.$refs.audio.play();
      }
    },
  },
  mounted(){
  }
};
</script>
