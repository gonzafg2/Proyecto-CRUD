<template>
  <footer class="footer bg-dark">
    <div class="container">
      <span class="text-muted"
        >&copy; Copyright {{ this.año }} | Desarrollo Frontend G2 - Desafío Latam</span
      >
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      año: null
    };
  },
  created() {
    this.añoActual();
  },
  methods: {
    añoActual() {
      let año = new Date();
      this.año = año.getFullYear();
    }
  }
};
</script>

<style lang="scss">
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #f5f5f5;
}
</style>
