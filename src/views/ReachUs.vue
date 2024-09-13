<template>
  <div class="admin-container">
    <div class="content-wrapper">
      <!-- Left Section: Comforting Words and Info Box -->
      <div class="left-section">
        <div class="comforting-words blog">
          <h2>We care 💙</h2>
          <p>
            "In times of illness, may hope be your constant companion. Remember, you are not alone in this journey, and brighter days are ahead. Stay strong, and take comfort in the support of your loved ones."
          </p>
        </div>
        
        <div class="info-box">
          <p>
            For inquiries or assistance with the admin panel, please reach out to us through the contact form. We are here to support you with all admin-related queries.
          </p>
        </div>
      </div>

      <!-- Right Section: Contact Info Form -->
      <div class="right-section">
        <h2 class="display-2">Talk to us</h2>
        <div class="contact-info">
          <div class="contact-item" v-for="contact in contacts" :key="contact.id">
            <h3>{{ contact.title }}</h3>
            <p>{{ contact.details }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';

const contacts = ref([
  { id: 1, title: "Email", details: "info@doccconnect.com" },
  { id: 2, title: "Phone", details: "021 560 8875" },
  { id: 3, title: "Location", details: "314 Imam Haron Road" },
]);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

body {
  margin: 0;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
}

.admin-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #a8dff5, #7ac7e3, #58aadb); 
  padding: 80px;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  background-color: #f7f7f7;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1200px; /* Adjust width as needed */
}

.left-section, .right-section {
  flex: 1;
  margin: 10px;
}

.left-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-right: 20px;
  border-right: 2px solid #e0e0e0; /* Optional separator between sections */
}

.right-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 20px;
}

.comforting-words, .info-box {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #0044cc;
  margin-bottom: 20px;
}

p {
  color: #555;
}

.contact-info {
  margin-top: 20px;
}

.contact-item {
  margin-bottom: 15px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.contact-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

h3 {
  color: #003399;
  font-weight: bold;
  margin-bottom: 5px;
}

/* Optional animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>
