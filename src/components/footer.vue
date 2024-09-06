<template>
    <div class="container-fluid">
      <div class="row">
        <p class="lead">
          JT &copy; {{ currentYear }}
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FooterComp",
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  };
  </script>
  
  <style scoped>
  .footer {
  background-color: #f8f9fa; 
  color: #0066cc; 
  padding: 10px 0;
  text-align: center;
}

.lead {
  margin: 0;
  font-size: 1.2rem;
}
  </style>
  