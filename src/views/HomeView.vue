<template>
  <div class="container-fluid position-relative gif-container">
    
    <div class="overlay-content text-center">
      <h2 class="display-2 text-white" id="title-text">Book Your Next Doctor’s Appointment with Ease</h2>
      <button class="btn btn-lg custom-btn mt-4" @click="findDoctor">
        Find a Doctor
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    findDoctor() {
      this.$router.push('/getDoctor'); 
    }
  }
}
</script>

<style scoped>

.gif-container {
  height: 100vh;
  background-image: url('https://mbalentlediko.github.io/Images/static/bgc.gif'); 
  background-size: cover;
  background-position: center;
  position: relative;
}

#title-text{
  -webkit-text-stroke: 2px blue;
  font-weight: 800;
}


.overlay-content {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  z-index: 2;
}


.custom-btn {
  background-color: rgba(255, 255, 255, 0.8); 
  color: #004080; 
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.custom-btn:hover {
  background-color: rgba(255, 255, 255, 1); 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  animation: slowVideo 30s infinite linear; 
}

@keyframes slowVideo {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05); 
  }
}

</style>
