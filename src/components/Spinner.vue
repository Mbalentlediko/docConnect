<template>
    <div class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SpinnerComp"
  }
  </script>
  
  <style scoped>
  .spinner-border {
    width: 3rem;
    height: 3rem;
    border-width: 0.3em;
  }
  </style>