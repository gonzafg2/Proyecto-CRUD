<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="container mt-5">
      <div class="row">
        <div class="col-12">
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
</style>
