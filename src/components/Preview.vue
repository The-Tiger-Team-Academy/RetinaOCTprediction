<template>
  <div class="hello" style="background-color:#def8f6; padding-top: 20px;">    
    <picture-input 
      ref="pictureInput"
      width="700" 
      height="350" 
      margin="16" 
      accept="image/jpeg,image/png" 
      size="10" 
      button-class="btn"
      :custom-strings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag & Drop'
      }"
      @change="onChange">
    </picture-input>
  </div>
</template>

<script>
import PictureInput from 'vue-picture-input'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    PictureInput
  },
  methods: {
    onChange (image) {
      console.log('New picture selected!')
      if (image) {
        console.log('Picture loaded.')
        this.image = image
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    }
  }
}
</script>

<style>
.picture-input{
    width: 50% !important;
}
</style>