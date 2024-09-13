<template>
    <div>
      <h2>Doctors</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specialty</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="doctor in doctors" :key="doctor.doctor_id">
            <td>{{ doctor.doctor_id }}</td>
            <td>{{ doctor.full_name }}</td>
            <td>{{ doctor.specialty }}</td>
            <td>{{ doctor.location }}</td>
            <td>
              <button @click="editDoctor(doctor)">Edit</button>
              <button @click="deleteDoctor(doctor.doctor_id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="showAddDoctorModal = true">Add Doctor</button>
    </div>
  </template>
  
  <script>
  const apiURL = 'https://docconnect-tq6o.onrender.com'; // Declare apiURL here
  import axios from 'axios';
  export default {
    data() {
      return {
        doctors: [],
        showAddDoctorModal: false,
      };
    },
    methods: {
      async fetchDoctors() {
        try {
          const response = await axios.get(`${apiURL}/doctors`); // Replaced with apiURL
          this.doctors = response.data.results;
        } catch (error) {
          console.error(error);
        }
      },
      async deleteDoctor(id) {
        try {
          await axios.delete(`${apiURL}/doctors/${id}`); // Replaced with apiURL
          this.fetchDoctors();
        } catch (error) {
          console.error(error);
        }
      },
      editDoctor(doctor) {
        // Logic to edit doctor
      },
    },
    mounted() {
      this.fetchDoctors();
    },
  };
  </script>
  