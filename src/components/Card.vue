<template>
  <div class="card-wrapper">
    <div class="card">
      <!-- Front Side -->
      <div class="card-front">
        <slot name="cardHeader"></slot>
        <slot name="cardBody"></slot>
      </div>
      <!-- Back Side -->
      <div class="card-back">
        <slot name="cardBack"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComp"
}
</script>

<style scoped>
.card-wrapper {
  perspective: 1000px;
  width: 18rem;
  margin: 1rem;
}

.card {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.card:hover {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-front {
  background-color: white;
  padding: 20px;
}

.card-back {
  background-color: #f8f9fa;
  padding: 20px;
  transform: rotateY(180deg);
}
</style>
