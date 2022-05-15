<template>
  <div id="app">
    <!-- <Message /> -->
    <Notification />
    <!-- <IndexList  /> -->
    <MessageList />
  </div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue';
import IndexList from './components/IndexList.vue';
import MessageList from './components/MessageList.vue';
import Message from './components/Message/Index.vue';
import Notification from './components/Notification/Index.vue';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'App',
  components: {
    Notification,
    MessageList,
  },
});
</script>

<style>
body,
html {
  padding: 0;
  margin: 0;
  height: 100%;
}
* {
  -webkit-tap-highlight-color: transparent;
  --vs-cyan: 59, 222, 200;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: honeydew;
  margin: auto;
}
</style>
