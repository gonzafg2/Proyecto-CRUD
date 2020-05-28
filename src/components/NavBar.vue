<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand mr-md-5" href="/"
      ><img src="../assets/logo.png" alt="Logo Vue" /> Proyecto CRUD VueJS</a
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <router-link to="/"
            ><a class="nav-link active" href="#">Acceder</a></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/registro"
            ><a class="nav-link active" href="#">Registro</a></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/usuarios"
            ><a class="nav-link active" href="#">Usuarios</a></router-link
          >
        </li>
      </ul>
      <span class="navbar-text">
        Desarrollo Frontend G2
      </span>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
.navbar-brand img {
  height: 2rem;
  padding-right: 0.5rem;
}
</style>
