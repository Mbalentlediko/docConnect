<template>
    <div class="container">
      <div class="row">
        <h2 class="display-2">Available Doctors</h2>
      </div>
      
    
      <div class="row justify-content-center">
        <CardComp
          v-for="doctor in doctors"
          :key="doctor.doctor_id"
          class="doctor-card"
        >
          <template #cardHeader>
            <img :src="doctor.profile_picture_url" loading="lazy" class="img-fluid rounded-circle" :alt="doctor.specialty">
          </template>
          <template #cardBody>
            <h5 class="card-title fw-bold">{{ doctor.specialty }}</h5>
            <p class="lead">Location: {{ doctor.location }}</p>
          </template>
          <template #cardBack>
            <h5 class="card-title fw-bold">{{ doctor.specialty }}</h5>
            <p class="lead">{{ doctor.description }}</p>
            <p class="lead"><span class="text-success fw-bold">Contact:</span> {{ doctor.contact_info }}</p>
          </template>
        </CardComp>
      </div>
  
     
      <div v-if="loading" class="row justify-content-center">
        <SpinnerComp />
      </div>
    </div>
  </template>
  
  <script>
  import CardComp from '@/components/CardComp.vue'
  import SpinnerComp from '@/components/Spinner.vue'
  import axios from 'axios'
  
  export default {
    name: 'DoctorsList',
    components: {
      CardComp,
      SpinnerComp
    },
    data() {
      return {
        doctors: [],
        loading: true
      }
    },
    mounted() {
      this.fetchDoctors();
    },
    methods: {
      async fetchDoctors() {
        try {
          const response = await axios.get('https://docconnect-tq6o.onrender.com/doctors'); 
          this.doctors = response.data;
        } catch (error) {
          console.error('Error fetching doctors:', error);
        } finally {
          this.loading = false;
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .doctor-card {
    margin: 1rem;
    animation: fadeIn 0.5s ease-in-out;
  }
  
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
  </style>
  