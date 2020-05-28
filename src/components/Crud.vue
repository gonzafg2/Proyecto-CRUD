<template>
  <div class="container" id="crud">
    <form @submit.prevent="submit" action="" class="">
      <div class="form-group">
        <label for="correo">Correo Electrónico</label>
        <input
          type="email"
          name=""
          id="correoId"
          class="form-control"
          placeholder="Escriba su correo electrónico"
          v-model="correo"
        />
      </div>
      <div class="form-group">
        <label for="correo">Contraseña</label>
        <input
          type="text"
          name=""
          id="claveId"
          class="form-control"
          placeholder="Escriba su contraseña"
          v-model="clave"
        />
      </div>
      <button class="btn btn-lg btn-success mr-5" type="submit">
        Crear Usuario
      </button>
      <button class="btn btn-lg btn-warning" type="reset">
        Limpiar
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      correo: "",
      clave: ""
    };
  },
  methods: {
    submit(){
      console.log("hola");
    }
  }
};
</script>

<style lang="scss" scoped>

</style>