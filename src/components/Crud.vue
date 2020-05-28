<template>
  <div class="container" id="crud">
    <form @submit.prevent="submit" @reset="limpiar" action="" class="">
      <div class="form-group">
        <label for="correo">Correo Electrónico</label>
        <input
          type="email"
          name=""
          id="correoId"
          class="form-control"
          placeholder="Escriba su correo electrónico"
          v-model="correo"
          required
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
          required
        />
      </div>
      <button
        v-if="this.id == null"
        class="btn btn-lg btn-success mr-5"
        type="submit"
      >
        Crear Usuario
      </button>
      <button v-else class="btn btn-lg btn-success mr-5" type="submit">
        Actualizar Usuario
      </button>
      <button class="btn btn-lg btn-warning" type="reset">
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
        <tbody>
          <tr v-for="(item, index) in usuarios" :key="index">
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.correo }}</td>
            <td>{{ item.clave }}</td>
            <td>
              <button
                @click="editar(index)"
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
      columnas: ["ID", "Correo Electrónico", "Contraseña", "Acciones"],
      usuarios: [
        {
          id: 1,
          correo: "gonzafg2@gmail.com",
          clave: "holahola"
        },
        {
          id: 2,
          correo: "gonzafg2@hotmail.com",
          clave: "helloworld"
        },
        {
          id: 3,
          correo: "gfleming@flemingtech.us",
          clave: "frijol"
        }
      ]
    };
  },
  // mounted() {
  //   if (localStorage.usuarios) {
  //     this.usuarios = localStorage.usuarios;
  //   }
  // },
  // // watch: {
  // //   usuarios(newUsuarios) {
  // //     localStorage.usuarios = newUsuarios;
  // //   }
  // // },
  methods: {
    // Método para ingresar nuevo usuario a tabla usuarios.
    submit() {
      // Crea un nuevo usuario.
      if (this.id == null) {
        try {
          // id del último usuario.
          let usuarioUltimo = this.usuarios.length - 1;
          let usuarioId = this.usuarios[usuarioUltimo].id;
          let usuarioIdNuevo = usuarioId + 1;

          // Creo variable local como un objeto.
          let usuarioNuevo = {
            id: usuarioIdNuevo,
            correo: this.correo,
            clave: this.clave
          };
          // Ingreso objeto usuarioNuevo a usuarios.
          this.usuarios.push(usuarioNuevo);
        } catch (error) {
          console.log(error);
        } finally {
          (this.correo = ""), (this.clave = "");
        }
      }
      // Actualiza un usuario previo.
      if (this.id !== null) {
        try {
          this.usuarios[this.id].correo = this.correo;
          this.usuarios[this.id].clave = this.clave;
        } catch (error) {
          console.log(error);
        } finally {
          (this.id = null), (this.correo = ""), (this.clave = "");
        }
      }
    },
    // Método para limpiar datos de formulario.
    limpiar() {
      (this.id = null), (this.correo = ""), (this.clave = "");
    },
    // Actualizar usuario.
    editar(id) {
      // Visualizar datos en formulario.
      this.id = id;
      this.correo = this.usuarios[id].correo;
      this.clave = this.usuarios[id].clave;
    },
    eliminar(id) {
      this.usuarios.splice(id, 1);
    }
  }
};
</script>

<style lang="scss" scoped></style>
