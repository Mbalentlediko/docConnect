<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'; // Import Axios

export default {
  name: "LoginForm",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async handleLogin() {
      try {
        // Make a POST request to your login API
        const response = await axios.post('/api/login', {
          email: this.email,
          password: this.password
        });

        // Handle successful login (e.g., save token, redirect)
        localStorage.setItem('authToken', response.data.token);
        this.$router.push('/doctors'); // Redirect to doctors list or home page
      } catch (error) {
        console.error('Login failed:', error);
        alert('Invalid credentials, please try again.');
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f0f8ff; /* Light blue background */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #004080; /* Darker blue for the title */
  text-align: center;
}

.form-label {
  color: #004080; /* Darker blue for labels */
}

.form-control {
  border: 1px solid #004080; /* Border matching hospital colors */
}

.btn-primary {
  background-color: #0080ff; /* Hospital blue for the button */
  border: none;
}

.btn-primary:hover {
  background-color: #0066cc; /* Slightly darker blue on hover */
}
</style>
