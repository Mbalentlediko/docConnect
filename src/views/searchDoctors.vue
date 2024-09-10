<template>
    <div>
      <!-- Conditional Rendering -->
      <div v-if="!isLoggedIn" class="login-page">
        <LoginForm @login-success="handleLoginSuccess" />
      </div>
      
      <div v-else>
        <NavBar/>
        <router-view/>
        <Footer/>
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';
  import LoginForm from './components/LoginForm.vue';
  
  export default {
    data() {
      return {
        isLoggedIn: false, // Initially not logged in
      };
    },
    components: {
      NavBar,
      Footer,
      LoginForm
    },
    methods: {
      handleLoginSuccess() {
        this.isLoggedIn = true; // Set to true after successful login
      }
    }
  }
  </script>
  