<script >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import DropZone from './components/Form.vue'
import Preview from './components/Preview.vue'
import Navbar from './components/Navbar.vue'

export default {
  name:"Home",
  components: {DropZone, Preview, Navbar}
}




</script>

<template>
<Navbar></Navbar>
<Preview style="padding-top:20px"></Preview>
<DropZone></DropZone>
</template>

<style lang="scss" scoped>
  template {
    background-color:#def8f6 ;
  }
</style>