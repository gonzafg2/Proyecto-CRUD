<template>
  <div class="registro">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 container shadow py-3">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Correo electrónico</label>
            <input
              v-model="correo"
              type="email"
              class="form-control"
              id="correo"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="clave">Contraseña</label>
            <input
              v-model="clave"
              type="password"
              class="form-control"
              id="clave"
            />
            <small id="emailHelp" class="form-text text-muted"
              >Contraseña debe tener tener entre 7 y 12 carácteres y contener al
              menos 1 mayúscula, 1 minúscula, 1 número</small
            >
          </div>
          <div class="form-group">
            <label for="clave2">Repite la contraseña</label>
            <input
              v-model="clave2"
              type="password"
              class="form-control"
              id="clave2"
            />
          </div>
          <button
            @click.prevent="verificar"
            @keyup.enter.prevent="verificar"
            type="submit"
            class="btn btn-success"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const regexCorreo = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const regexClave = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){7,12}$/

export default {
  name: "Registro",
  data: function() {
    return {
      correo: "",
      clave: "",
      clave2: "",
    }
  },
  methods: {
    verificar: function() {
      console.log("======================")
      console.log("Verificando Formulario")
      if (this.correo && this.clave && this.clave2) {
        if (regexCorreo.test(this.correo)) {
          console.log("Correo cumple regex")
          if (regexClave.test(this.clave)) {
            console.log("Clave cumple regex")
            if (this.clave === this.clave2) {
              console.log("Claves coinciden")
              if (this.usuarioEnClave()) {
                console.log("No está nombre usuario en clave")
                this.registrar()
              } else {
                alert(
                  "Su contraseña no puede incluir el nombre de usuario de su correo"
                )
              }
            } else {
              alert("Las contraseñas no coinciden")
            }
          } else {
            alert("Clave inválida")
          }
        } else {
          alert("Correo inválido")
        }
      } else {
        alert("Debe llenar todos los campos")
      }
    },
    registrar: function() {
      console.log("Registrando usuario:")
      let nuevoUsuario = {
        id: this.generarNuevoId(),
        correo: this.correo,
        clave: this.clave,
      }
      if (!localStorage.getItem("usuarios")) {
        localStorage.setItem("usuarios", "[]")
      }
      let usuarios = [
        ...JSON.parse(localStorage.getItem("usuarios")),
        nuevoUsuario,
      ]
      localStorage.setItem("usuarios", JSON.stringify(usuarios))
      alert("Registro completo. Ahora puedes iniciar sesión.")
      this.$router.push("/")
    },
    generarNuevoId: function() {
      let arrayUsuarios = JSON.parse(localStorage.getItem("usuarios"))
      if (localStorage.getItem("usuarios")) {
        let idUltimoUsuario = arrayUsuarios[arrayUsuarios.length - 1].id
        return idUltimoUsuario + 1
      } else {
        return 0
      }
    },
    usuarioEnClave: function() {
      let usuario = this.correo.split("@")[0]
      if (this.clave.includes(usuario)) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
