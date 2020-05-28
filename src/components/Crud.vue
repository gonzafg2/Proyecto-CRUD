<template>
  <div class="container" id="crud">
    <form action="" class="">
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
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      correo: "",
      clave: ""
    }
  },
}
</script>

<style lang="scss" scoped>

</style>