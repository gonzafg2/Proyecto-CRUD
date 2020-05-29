<template>
    <div class="Logeo">
       <h1>Formulario</h1>
    
       
  <div class="form-group mx-3">
    <label for="exampleInputEmail1">Correo</label>
    <input type="email" class="form-control " v-model="correo" aria-describedby="emailHelp" placeholder="ej: mi.nombre@minombre.cl">
    
  </div>
  <div class="form-group mx-3">
    <label for="exampleInputPassword1" placeholder="Contraseña">Contraseña</label>
    <input type="password" class="form-control " placeholder="Contraseña" v-model="clave" >
    <small>Entre 7 y 15 caracteres, minimo una Mayuscula y un simbolo</small>
  </div>
  <div class="form-group form-check">
    <input  v-model="check" type="checkbox" class="form-check-input ">
    <label  class="form-check-label" for="exampleCheck1">Registrar</label>
    
  </div>
  <button class="btn btn-primary" @click="Registrar">Registrar</button>

    </div>
</template>


<script>
export default {
  name: "Logeo",
  data(){ return{
      usuarios:"",
    correo: "",
    clave:"",
    check:" ",
    validarCorreo:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
   validarContraseña:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){7,15}$/,

  }
  },

  methods: {
    Registrar(){
if (this.validarCorreo.test(this.correo)==true) {
    alert('¡Correo Exitoso!')
}else{
    alert('Formato de Correo Invalido :(')
}
if (this.validarContraseña.test(this.clave)==true) {
    alert('¡Contraseña Exitosa!')
}else{
    alert('Contraseña Insegura, Recuerda los parametros minimos que debe tener ')
}

    },
  },
  
}


 </script>
<style scooped>
.Logeo{
    background-color:#b1f385;
    width: 80%;
    margin: auto;

}
label, small{
  text-align: left;
  margin: none
}

</style>