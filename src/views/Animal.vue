<template>
    <div class="animal" >
        <h1>Light in the Dark</h1>
        <p>Deer in the light</p>
        <video controls>
            <source src="deer_reveal_video.mp4" type="video/mp4">
        </video>
    </div>
</template>

<style scoped lang="scss">
.animal {
    color: rgb(251,288,64);
    font-family: Baskerville;
    position: fixed;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: #f1f1f1;
    width: 100%;
    padding: 20px;
}
#video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
}
</style>


<script>
//var video = document.getElementById("video");

export default {
  name: 'Animal'
   
  }

</script>





