<template>
    <div class="contact-container">
      <div class="row">
        <h2 class="display-2">Reach Us</h2>
        <p>If you have any inquiries, feel free to get in touch with us using the form below.</p>
      </div>
      
      <div class="contact-form">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" class="form-control" v-model="name" required />
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" class="form-control" v-model="email" required />
          </div>
  
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" class="form-control" v-model="message" rows="5" required></textarea>
          </div>
  
          <button type="submit" class="btn-submit">Send Message</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const name = ref('');
  const email = ref('');
  const message = ref('');
  
  const handleSubmit = () => {
    alert(`Message from ${name.value} has been submitted.`);
   
  };
  </script>
  
  <style scoped>
  body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('https://mbalentlediko.github.io/Images/static/contactpage.jpg'); 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .contact-container {
    max-width: 600px;
    width: 100%;
    padding: 20px;
    /* background-color: rgba(255, 255, 255, 0.7);
    border-radius: 10px; */
    background-color: #f7f7f7;
  border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); 
  }
  
  h2 {
    color: #0044cc; 
    text-align: center;
  }
  
  p {
    text-align: center;
    color: #333;
  }
  
  .contact-form {
    margin-top: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    color: #0044cc; 
    font-weight: bold;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .btn-submit {
    display: block;
    width: 100%;
    background-color: #0044cc;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn-submit:hover {
    background-color: #003399;
  }
  </style>
  