<template>
  <div class="registro">
    <!-- Modal -->
    <div v-if="modalData.showModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">{{ modalData.title }}</h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" @click="toggleModal">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>{{ modalData.body }}</p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-success"
                    @click="toggleModal"
                  >
                    Oka
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <!-- Formulario -->
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
              menos 1 mayúscula, 1 minúscula, 1 número y 1 caracter
              especial</small
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
      modalData: {
        showModal: false,
        title: "Advertencia",
        body: "Asdf",
      },
    }
  },
  methods: {
    verificar: function() {
      console.log("Verificando Formulario:")
      if (this.correo && this.clave && this.clave2) {
        if (regexCorreo.test(this.correo)) {
          console.log("Correo cumple regex")
          if (regexClave.test(this.clave)) {
            console.log("Clave cumple regex")
            if (this.clave === this.clave2) {
              console.log("Claves coinciden")
              if (!this.usuarioEnClave()) {
                console.log("No está nombre usuario en clave")
                this.registrar()
              } else {
                this.modalData.body =
                  "Su contraseña no puede incluir el nombre de usuario de su correo"
                this.toggleModal()
              }
            } else {
              this.modalData.body = "Las contraseñas no coinciden"
              this.toggleModal()
            }
          } else {
            this.modalData.body = "Clave inválida"
            this.toggleModal()
          }
        } else {
          this.modalData.body = "Correo inválido"
          this.toggleModal()
        }
      } else {
        this.modalData.body = "Debe llenar todos los campos"
        this.toggleModal()
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
      this.modalData.title = "¡Éxito!"
      this.modalData.body = "Registro completo. Ahora puedes iniciar sesión."
      this.toggleModal()
      setTimeout(
        function() {
          this.$router.push("/")
        }.bind(this),
        3000
      )
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
    toggleModal: function() {
      this.modalData.showModal = !this.modalData.showModal
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
