<!-- BookAppointment.vue -->
<template>
    <div v-if="doctor">
      <h3>Appointment Receipt</h3>
      <p><strong>Doctor:</strong> {{ doctor.full_name }}</p>
      <p><strong>Specialty:</strong> {{ doctor.specialty }}</p>
      <p><strong>Location:</strong> {{ doctor.location }}</p>
  
      <!-- Email input to send the receipt -->
      <label for="email">Enter your email to receive the receipt:</label>
      <input
        v-model="email"
        type="email"
        id="email"
        placeholder="Enter your email"
        class="form-control"
      />
      <button @click="sendReceipt" class="btn btn-primary mt-3">Send Receipt</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      doctor: Object, // Doctor object passed from the parent
    },
    data() {
      return {
        email: '', // To store the user's email
      };
    },
    methods: {
      sendReceipt() {
        if (!this.email) {
          alert('Please enter an email address.');
          return;
        }
  
        // Send the receipt via an API
        fetch('/api/book-appointment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            doctor_id: this.doctor.doctor_id,
            email: this.email,
          }),
        })
          .then((response) => {
            if (response.ok) {
              alert(`Receipt sent to ${this.email}`);
            } else {
              alert('Failed to send the receipt. Please try again.');
            }
          })
          .catch((error) => console.error('Error sending receipt:', error));
      },
    },
  };
  </script>
  