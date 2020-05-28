<template>
  <div class="registro">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 container shadow py-3">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Correo electrónico</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="password1">Contraseña</label>
            <input type="password" class="form-control" id="password1" />
          </div>
          <div class="form-group">
            <label for="password2">Repite la contraseña</label>
            <input type="password" class="form-control" id="password2" />
          </div>
          <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registro",
}
</script>

<style lang="scss" scoped></style>
