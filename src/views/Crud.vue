<template>
  <div class="container" id="crud">
    <form
      @submit.prevent="crear"
      @reset="limpiar"
      class="d-flex justify-content-between align-items-center"
    >
      <div class="form-group w-75">
        <label for="correo">Correo Electrónico</label>
        <input
          type="email"
          name=""
          id="correoId"
          class="form-control"
          placeholder="Escriba su correo"
          v-model="correo"
          required
        />
      </div>
      <div class="form-group w-75 mx-3">
        <label for="correo">Contraseña</label>
        <input
          type="text"
          name=""
          id="claveId"
          class="form-control"
          placeholder="Escriba su contraseña"
          v-model="clave"
          required
        />
      </div>
      <button
        v-if="this.id == null"
        class="btn btn-md btn-success w-50 mx-3 mt-3"
        type="submit"
      >
        Crear Usuario
      </button>
      <button
        v-else
        class="btn btn-md btn-success w-50 mx-3 mt-3"
        type="submit"
      >
        Actualizar Usuario
      </button>
      <button class="btn btn-md btn-warning w-50 mt-3" type="reset">
        Limpiar
      </button>
    </form>

    <section class="usuarios mt-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" v-for="item in columnas" :key="item.id">
              {{ item }}
            </th>
          </tr>
        </thead>
        <tbody v-if="this.usuarios !== []">
          <tr v-for="(item, index) in usuarios" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.correo }}</td>
            <td>{{ item.clave }}</td>
            <td>
              <button
                @click="actualizar(index)"
                class="btn btn-secondary btn-sm mr-3"
              >
                Editar
              </button>
              <button @click="eliminar(index)" class="btn btn-danger btn-sm">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td class="pt-4" colspan="4">Sin información disponible.</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      correo: "",
      clave: "",
      columnas: ["#", "Correo Electrónico", "Contraseña", "Acciones"],
      usuarios: []
    };
  },
  created() {
    // Leer datos del Local Storage para renderizarlos en la tabla.
    this.leer();
  },
  methods: {
    // Leer datos del Local Storage para renderizarlos en la tabla.
    leer() {
      let dataLocalStorage = JSON.parse(localStorage.getItem("usuarios"));
      if (dataLocalStorage !== null) {
        dataLocalStorage.forEach(elemento => {
          this.usuarios.push(elemento);
        });
      }
    },
    // Ingresar nuevo usuario a tabla usuarios.
    crear() {
      // Crea un nuevo usuario.
      if (this.id == null) {
        try {
          // Creo variable local como un objeto.
          let usuarioNuevo = {
            correo: this.correo,
            clave: this.clave,
          };
          // Insertar nuevo usuario en tabla usuarios.
          this.usuarios.push(usuarioNuevo);
          // Guardar nuevo usuario en LocalStorage
          localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
        } catch (error) {
          console.log(error);
        } finally {
          (this.correo = ""), (this.clave = "");
        }
      }
      // Actualiza un usuario previo.
      if (this.id !== null) {
        try {
          // Inserta datos actualizados en tabla Usuarios
          this.usuarios[this.id].correo = this.correo;
          this.usuarios[this.id].clave = this.clave;
          // Actualizar en LocalStorage como STRING.
          localStorage.usuarios = JSON.stringify(this.usuarios);
        } catch (error) {
          console.log(error);
        } finally {
          (this.id = null), (this.correo = ""), (this.clave = "");
        }
      }
    },
    // Actualizar usuario.
    actualizar(id) {
      // Visualizar datos en formulario.
      this.id = id;
      this.correo = this.usuarios[id].correo;
      this.clave = this.usuarios[id].clave;
    },
    // Eliminar usuario.
    eliminar(id) {
      // Eliminar en tabla de usuarios.
      this.usuarios.splice(id, 1);
      // Eliminar en LocalStorage.
      localStorage.usuarios = JSON.stringify(this.usuarios);
    },
    // Limpiar datos de formulario.
    limpiar() {
      (this.id = null), (this.correo = ""), (this.clave = "");
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  button {
    border-radius: 25px;
  }
}
table {
  button {
    border-radius: 15px;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
