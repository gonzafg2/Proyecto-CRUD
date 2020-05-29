<template>
  <div id="app">
    <NavBar></NavBar>
    <div
      class="contenedor-central container d-flex justify-content-center align-items-center"
    >
      <div class="row w-100">
        <div class="col">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { NavBar, Footer }
};
</script>

<style lang="scss">
#app {
  text-align: center;
}
.contenedor-central {
  height: 80vh;
}
</style>
