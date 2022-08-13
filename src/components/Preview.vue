<template>
  <div class="hello" style="background-color:#def8f6">    
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
        drag: 'Drag a ? GIF or GTFO'
      }"
      @change="onChange">
    </picture-input>
  </div>
</template>

<script>
import PictureInput from 'vue-picture-input'
export default {
name: 'Preview',
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

</style>