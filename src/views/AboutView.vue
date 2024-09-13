<template>
  <div class="about-container">
  
     <div class="content-row centre">
      <h1> A few things about us 💙</h1>
     </div>
    <div class="content-row right">
      <div class="col-md-6 blog-style-column">
        <h2>About DocConnect</h2>
        <p>DocConnect is a user-friendly online platform designed to streamline the process of booking appointments with healthcare professionals. Our goal is to make healthcare more accessible by providing an easy-to-use interface for patients to find, connect, and book appointments with doctors at their convenience.</p>
      </div>
    </div>

    
    <div class="divider"></div>


    <div class="content-row left">
      <div class="col-md-6 blog-style-column">
        <h3>Key Features</h3>
        <ul>
          <li>Search and browse available doctors by specialty and location.</li>
          <li>View doctor profiles, including qualifications, experience, and available services.</li>
          <li>Schedule appointments easily through our integrated booking system.</li>
          <li>Get real-time notifications and reminders for upcoming appointments.</li>
        </ul>
      </div>
    </div>

    
    <div class="divider"></div>

   
    <div class="content-row right">
      <div class="col-md-6 blog-style-column">
        <h3>Our Mission</h3>
        <p>Our mission is to enhance the accessibility of healthcare services by providing a seamless, convenient, and reliable online booking experience. We aim to empower patients to take control of their health by connecting them with trusted medical professionals in just a few clicks.</p>
      </div>
    </div>

    
    <div class="divider"></div>

  
    <div class="content-row left">
      <div class="col-md-6 blog-style-column">
        <h3>How It Works</h3>
        <ol>
          <li>Search for a doctor by specialty or location.</li>
          <li>View detailed profiles and select the doctor that fits your needs.</li>
          <li>Book your appointment with just a few clicks and receive confirmation instantly.</li>
        </ol>
      </div>
    </div>

    
    <div class="divider"></div>

    <div class="content-row right">
      <div class="col-md-6 blog-style-column">
        <h3>Why Choose DocConnect?</h3>
        <ul>
          <li>Comprehensive database of trusted doctors and specialists.</li>
          <li>Easy and intuitive booking process.</li>
          <li>Secure handling of patient information.</li>
          <li>Round-the-clock access to scheduling and appointment details.</li>
        </ul>
      </div>
    </div>

    
    <div class="divider"></div>

  
    <div class="content-row left">
      <div class="col-md-6 blog-style-column">
        <h3>What Our Users Say</h3>
        <blockquote>"DocConnect made finding the right specialist so easy. I booked my appointment within minutes!" - T.Poswayo</blockquote>
        <blockquote>"Thanks to DocConnect, I can schedule appointments with my doctor without any hassle." - M.Mbuzwana</blockquote>
      </div>
    </div>

  
    <p>Ready to book your appointment? <a href="/get-doctor">Find a Doctor</a> today!</p>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
}
</script>

<style scoped>

.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(to bottom right, #0066cc, #80d4ff);
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
}


.content-row {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  /* margin: 0rem 0; */
}

.content-row.right {
  justify-content: flex-end;
}

.content-row.left {
  justify-content: flex-start;
}


.blog-style-column {
  background-color: white;
  padding: 1.5rem;
  margin: 0rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
  width: 300%;
}


.blog-style-column:hover {
  transform: translateY(-10px);
}


h1,h2, h3 {
  font-family: 'Playfair Display', serif;
  color: #004080;
  font-weight: bold;
}


.divider {
  width: 100px;
  height: 4px;
  background: linear-gradient(to right, #0066cc, #80d4ff);
  border-radius: 5px;
  margin: 20px 0;
}


blockquote {
  font-style: italic;
  background-color: #f0f8ff;
  padding: 10px;
  border-left: 5px solid #004080;
  margin: 1.5rem 0;
}
.content-row {
  display: flex;
  justify-content: center; 
  align-items: center; 
  text-align: center;
}
h1{
  font-family: 'Playfair Display', serif;
  color: white;
  font-weight: bold;
}
</style>
