<template>
  <div class="container-fluid doctor-list">
    <div class="search-bar">
      <input
        v-model="searchQuery"
        @input="filterDoctors"
        placeholder="Search by specialty..."
        class="form-control"
      />
    </div>

    <div class="row justify-content-center">
      <div
        v-for="(doctor, index) in filteredDoctors"
        :key="doctor.doctor_id"
        class="doctor-card"
        :class="{ flipped: flippedCards.includes(index) }"
        @click="flipCard(index)"
      >
            <div class="card-front">
          <img
            :src="doctor.profile_picture_url"
            loading="lazy"
            class="img-fluid doctor-image"
            :alt="doctor.specialty"
          />
          <h5 class="card-title fw-bold">{{ doctor.full_name }}</h5>
          <button class="btn btn-primary mt-2" @click.stop="bookDoctor(doctor)">
            Book Doctor
          </button>
        </div>

        <!-- Back Side of the Card -->
        <div class="card-back">
          <h5 class="card-title fw-bold">{{ doctor.full_name }}</h5>
          <p class="description">{{ doctor.description }}</p>
          <p class="lead">Location: {{ doctor.location }}</p>
          <p class="specialty">Specialty: {{ doctor.specialty }}</p>
          <p class="contact">Contact: {{ doctor.contact_info }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";


export default {
  data() {
    return {
      searchQuery: "",
      filteredDoctors: [], 
      flippedCards: [],
    };
  },
  computed: {
    ...mapState(["doctors"]), 
  },
  watch: {
   
    doctors: {
      immediate: true, 
      handler(newDoctors) {
        this.filteredDoctors = newDoctors; 
      },
    },
  },
  methods: {
    filterDoctors() {
    
      if (this.searchQuery === "") {
        this.filteredDoctors = this.doctors;
      } else {
        this.filteredDoctors = this.doctors.filter((doctor) =>
          doctor.specialty.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
    bookDoctor(doctor) {
      console.log("Booking doctor:", doctor);
 
    },
    flipCard(index) {
      if (this.flippedCards.includes(index)) {
        
        this.flippedCards = this.flippedCards.filter((i) => i !== index);
      } else {
        
        this.flippedCards.push(index);
      }
    },
  },
  mounted() {
  this.$store.dispatch('fetchAllDoctors');
}
};
</script>

<style scoped>
.doctor-list {
  background-color: #e0f7fa; 
  padding: 2rem;
}

.search-bar {
  margin-bottom: 1.5rem;
  text-align: center;
}

.doctor-card {
  margin: 1rem;
  width: 300px;
  height: 400px;
  perspective: 1000px;
  position: relative;
  cursor: pointer;
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.6s;
}

.card-front {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

.card-back {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  transform: rotateY(180deg);
  background-color: #ffffff;
  border: 2px solid #007bff;
}

.flipped .card-front {
  transform: rotateY(180deg);
}

.flipped .card-back {
  transform: rotateY(0deg);
}

.doctor-image {
  height: 85%; 
  object-fit: cover;
  border-radius: 8px;
  width: 150%;
}

button {
  width: 100%;
}

.card-title {
  font-weight: bold;
  margin-top: 1rem;
}

.description,
.lead,
.specialty,
.contact {
  margin-bottom: 0.5rem;
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
