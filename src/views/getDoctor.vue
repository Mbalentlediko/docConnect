<template>
    <div class="card-deck">
      <!-- Show Spinner while loading -->
      <SpinnerComp v-if="loading" />
  
      <!-- Show Cards after loading -->
      <CardComp
        v-for="(doc) in doctors"
        :key="doc.doctor_id"
        :doctor="doc"
        v-else
      />
    </div>
  </template>
  
  <script>
  import CardComp from './CardComp.vue';
  import SpinnerComp from './SpinnerComp.vue';
  import axios from 'axios';
  
  export default {
    name: "DoctorsList",
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
          const response = await axios.get('/api/doctors');
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
  .card-deck {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  </style>
  