<script >
import { ref } from '@vue/reactivity'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
import Calendar from './components/Calendar.vue';
import Form from './components/Form.vue';

export default {
  name:"Home",
  components: {
    HelloWorld,
    Calendar,
    Form,
  },
  setup() {
    let dropzoneFile = ref("");

    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0]
    }

    return {dropzoneFile, drop };
  }
}
</script>

<template>
<div class="home">
<h1>Dropzone</h1>
<HelloWorld @drop.prevent="drop"/>
  <span class="file-info">File: {{dropzoneFile.name}}</span>
  </div>
  <Form/>
</template>

<style lang="scss" scoped>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:#f1f1f1;

  h1 {
    font-size: 40px;
    margin-bottom:32px ;
  }

  .file-info {
    margin-top: 32px;
  }
}

</style>