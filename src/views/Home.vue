<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Crud></Crud>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Crud from "@/components/Crud.vue";
// import Logeo from "@/components/Logeo.vue"

export default {
  name: "Home",
  components: {
    HelloWorld,
    Crud
    // Logeo
  }
};
</script>
