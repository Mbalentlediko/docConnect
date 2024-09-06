<template>
    <div class="footer">
      <p class="lead">
        DocConnect &copy; {{ currentYear }}
      </p>
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
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #f8f9fa; /* Neutral light color */
    color: #0066cc; /* Blue color similar to hospital branding */
    padding: 10px 0;
    text-align: center;
  }
  .lead {
    margin: 0;
    font-size: 1.2rem;
  }
  </style>
  