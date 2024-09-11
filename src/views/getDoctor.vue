<template>
  <div class="container-fluid d-flex justify-center align-items-center gap-5 flex-column">
    <h2 class="display-2">Available Doctors</h2>

    <SpinnerComp v-if="loading" />

    <div class="row justify-content-center">
      <Card
        v-for="doctor in doctors"
        :key="doctor.doctor_id"
        class="doctor-card"
      >
        <template v-slot:cardHeader>
          <img
            :src="doctor.profile_picture_url"
            loading="lazy"
            class="img-fluid rounded-circle"
            :alt="doctor.specialty"
          />
        </template>
        <template v-slot:cardBody>
          <h5 class="card-title fw-bold">{{ doctor.specialty }}</h5>
          <p class="lead">Location: {{ doctor.location }}</p>
        </template>
        <template v-slot:cardBack>
          <h5 class="card-title fw-bold">{{ doctor.specialty }}</h5>
          <p class="lead">{{ doctor.description }}</p>
          <p class="lead">
            <span class="text-success fw-bold">Contact:</span>
            {{ doctor.contact_info }}
          </p>
        </template>
      </Card>
    </div>
  </div>
</template>


<script>
import Card from "@/components/Card.vue";
import SpinnerComp from "@/components/Spinner.vue";
import { mapState } from "vuex";

export default {
  name: "DoctorsList",
  components: {
    Card,
    SpinnerComp,
  },
  computed: {
    ...mapState(["doctors"]),
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.fetchDoctors();
    console.log(this.doctors);
  },
  methods: {
    async fetchDoctors() {
      this.loading = true;
      await this.$store.dispatch("fetchAllDoctors");
      this.loading = false;
    },
  },
};
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
