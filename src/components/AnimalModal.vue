<template>
  <transition name="animal-modal-fade">
    <div class="animal-modal-backdrop">
      <div id="animal_modal" class="animal-modal" v-if="animal != null">

        <div v-if="animal.reveal_video !== null">
            <video id="animal_video" ref="video" autoplay @click="close">
              <source v-bind:src="require('../assets/video/' + animal.reveal_video)" type="video/mp4">
            </video>
        </div>
        <div v-if="animal.reveal_video === null">
            <img 
            id="animal_image"
            v-bind:src="require('../assets/animals/' + animal.image)"
            v-bind:alt="animal.name" 
            v-bind:title="animal.name" 
            class="animal_img" 
            @click="close"/>
            <audio ref="audio" autoplay style="display: none;">
              <source v-bind:src="require('../assets/audio/' + animal.sound)" type="audio/ogg">
            </audio>
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
  display: flex;
  flex-direction: column;
}
.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #000;
  background: transparent;
  text-align: right;
}
.btn-green {
  color: white;
  background: #828282;
  border: 1px solid #828282;
  border-radius: 2px;
  margin: 5px;
}
.input {
  margin-top: 5px;
}
.added-text {
  margin-block-end: -10px;
  margin-block-start: 0.5rem;
}
</style>

<script>
import $ from 'jquery'

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
    playAnimalRevealVideo() {
      console.log("playAnimalRevealVideo");
      if (this.$refs.video != null) {
        this.$refs.video.load();
        this.$refs.video.play();

        var self = this;
        setTimeout(function() {
            self.resizeModal(self.animal);
        }, 500);
      }
    },
    playAnimalSound() {
      console.log("playAnimalSound");
      if (this.$refs.audio != null) {
        this.$refs.audio.load();
        this.$refs.audio.play();

        var self = this;
        setTimeout(function() {
            self.resizeModal(self.animal);
        }, 500);
      }
    },
    resizeModal(animal) {
      if (animal.reveal_video != null) {
          $('animal_modal').attr('height',$('animal_video').height());
          $('animal_modal').attr('width',$('animal_video').width());
      } else {
          let img = new Image();
          img.onload = () => {
              console.log('the image dimensions are ${img.width}x${img.height}');
              $('animal_modal').attr('height',img.height);
              $('animal_modal').attr('width',img.width);
          }
          img.src = require('../assets/animals/' + animal.image);
      }
    }
  },
  mounted(){
  }
};
</script>
