<template>
  <div>
    <!-- Show Login Form if not logged in -->
    <div v-if="!isLoggedIn">
      <LoginVue @login-success="handleLoginSuccess" />
    </div>
    
    <!-- Show NavBar, Footer, and the rest of the content after successful login -->
    <div v-else>
      <NavBar />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import LoginVue from '@/views/LoginVue.vue';

export default {
  data() {
    return {
      isLoggedIn: false, // Initialize with not logged in
    };
  },
  components: {
    NavBar,
    Footer,
    LoginVue,
  },
  methods: {
    // This method is called when the user successfully logs in
    handleLoginSuccess() {
      this.isLoggedIn = true; // Mark the user as logged in
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
