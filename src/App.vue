<script >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Form from "./components/Form.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "Home",
  components: { Navbar, Form, },
};
</script>

<template>
<body class="" style="background-color:#def8f6">
  <Navbar></Navbar>
  <Form></Form>
</body>
  
</template>

<style lang="scss" scoped>

</style>