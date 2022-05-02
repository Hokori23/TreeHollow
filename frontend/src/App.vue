<template>
  <div id="app">
    <IndexList  />
  </div>
</template>

<script>
import IndexList from './components/IndexList.vue';
export default {
  name: 'App',
  components: {
    IndexList,
  },
};
</script>

<style>
body,
html {
  padding: 0;
  margin: 0;
  height: 100%;
}
*{
  padding: 0;
  margin: 0;
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  src: local('Poppins'), url(/fonts/Poppins-Regular.ttf) format('truetype');
}
#app {
  font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  background-color: honeydew;
  margin: auto;
}
</style>
