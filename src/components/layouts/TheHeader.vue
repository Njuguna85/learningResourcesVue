<template>
  <header>
    <!-- interpolate the custom attr -->
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  // custom attribute for this component
  props: ['title'],
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #640032;
  display: flex;
  justify-content: center;
  align-items: center;
}

header h1 {
  color: white;
  margin: 0;
}
</style>