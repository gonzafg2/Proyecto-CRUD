<template>
    <div class="Logeo">
       <h1>Inicia Sesion</h1>
    
       
  <div class="form-group mx-3">
    <label for="exampleInputEmail1">Correo</label>
    <input type="email" class="form-control " v-model="IngCorreo"  aria-describedby="emailHelp" placeholder="ej: mi.nombre@minombre.cl">
    
  </div>
  <div class="form-group mx-3">
    <label for="exampleInputPassword1" placeholder="Contraseña">Contraseña</label>
    <input type="password" class="form-control " placeholder="Contraseña" v-model="IngClave" >
    
  </div>
  <div class="form-group form-check">
    <input  v-model="check" type="checkbox" class="form-check-input ">
    <label  class="form-check-label" for="exampleCheck1">Registrar</label>
    
  </div>
  <button class="btn btn-primary" @click="Registrar">Iniciar Sesion</button>

    </div>
</template>


<script>
export default {
  name: "Logeo",
  data(){ return{
    IngCorreo:'',
    IngClave:'',
    check:" ",
    validarCorreo:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
   validarContraseña:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){7,15}$/,

  }
  },

  methods: {
    Registrar(){
  let verificarCorreo='';
  let verificarClave ='';
  let ingCorrecto=[];
  let usuarios = [
        ...JSON.parse(localStorage.getItem("usuarios"))
        
      ]
    usuarios.forEach(usuario => {
      if(usuario.correo=== this.IngCorreo && usuario.clave ===this.IngClave){
      ingCorrecto.push({'name':usuario.correo, 'clave': usuario.clave, })      
     
      }
      if(usuario.correo === this.IngCorreo){
      verificarCorreo= usuario.correo
      }
      if(usuario.clave === this.IngClave){
        verificarClave=usuario.clave
      }
    });

    if(verificarCorreo==''){
         alert('correo invalido')
      }
    else if(verificarClave==''){
  alert('clave invalida')
     } 

  if(ingCorrecto !=''){
alert('Inicio exitoso')
this.$router.push("/Usuarios")
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