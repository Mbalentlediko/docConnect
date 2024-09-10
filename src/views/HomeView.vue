<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Available Doctors</h2>
    </div>
    
    <!-- Display doctor cards -->
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
      </CardComp>
    </div>

    <!-- Show spinner while loading -->
    <div v-if="loading" class="row justify-content-center">
      <SpinnerComp />
    </div>
  </div>
</template>

<script>
import CardComp from '@/components/Card.vue'
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
        const response = await axios.get('https://docconnect-tq6o.onrender.com'); // Your hosted API link
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

.doctor-card {
  width: 18rem;
  margin: 1rem;
  animation: fadeIn 0.5s ease-in-out;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.card-header img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.card-title {
  color: #004080; /* Hospital color */
}
</style>

