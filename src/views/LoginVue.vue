<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Login</h2>
    </div>
    <div class="row my-2 justify-content-center">
      <form class="login-form" @submit.prevent="login">
        <div class="input-group">
          <label for="email">Email address</label>
          <input
            type="email"
            id="email"
            class="input-field"
            placeholder="Email"
            v-model="payload.emailAdd"
            pattern="^[A-Za-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$"
            required
          />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            class="input-field"
            placeholder="Password"
            v-model="payload.pwd"
            minlength="4"
            required
          />
        </div>
        <div class="actions">
          <button type="submit" class="primary-button">Login</button>
        </div>
        <div class="additional-actions">
          <div class="d-flex justify-content-between">
            <button class="secondary-button">Forgot Password</button>
            <button class="secondary-button">Sign up</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { reactive } from 'vue'

const store = useStore()

// Using reactive for objects to track changes in the payload
const payload = reactive({
    emailAdd: '',
    pwd: ''
})

// Function to handle login, dispatching the payload to the store
function login() {
    store.dispatch('login', payload)
}
</script>


