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
          <tr v-for="item in usuarios" :key="item.id">
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.correo }}</td>
            <td>{{ item.clave }}</td>
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
      correo: "",
      clave: "",
      columnas: ["ID", "Correo Electrónico", "Contraseña"],
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
  methods: {
    // Método para ingresar nuevo usuario a tabla usuarios.
    submit() {
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
    },
    // Método para limpiar datos de formulario.
    limpiar() {
      (this.correo = ""), (this.clave = "");
    }
  }
};
</script>

<style lang="scss" scoped></style>
