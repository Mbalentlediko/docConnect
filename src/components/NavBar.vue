<template>
  <nav class="navbar navbar-expand-lg navbar-light medical-blue-bg">
    <div class="container-fluid">
      <!-- Logo -->
      <a class="navbar-brand" href="#">
        <img src="https://mbalentlediko.github.io/Images/static/DocConnect.png" alt="DocConnect Logo" class="navbar-logo">
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"><i class="bi bi-house-check-fill"></i> Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/getDoctor">Find Doctor</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ReachUs">Reach Us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBarComp"
};
</script>

<style scoped>
.medical-blue-bg {
  background-color: #007bff;
}

.navbar-brand,
.nav-link {
  color: #ffffff !important;
}


.navbar-logo {
  height: 40px; 
  width: auto;
  border-radius: 150px;
}
</style>
