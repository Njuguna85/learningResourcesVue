// the basic best practise it to have a template, script and its styling
// this app has two components and thus
// they can be used as a custom element
<template>
  <!-- pass a title to the header component -->
  <the-header title="Remember Me"></the-header>
  <the-resources></the-resources>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResource.vue';

export default {
  // local components
  components: {
    TheHeader,
    TheResources,
  },
};
</script>

// the styles are global
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>