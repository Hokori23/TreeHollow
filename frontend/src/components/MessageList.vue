<template>
  <div class="main-body"></div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import useLoading from './childhoods/useLoading';
import useRequest from './childhoods/useRequest';

export default defineComponent({
  name: 'MessageList',
  mounted() {
    console.warn('mounted');
  },
  setup: () => {
    const { loading, handleGetNewMessage } = useRequest();
    useLoading(loading);
    handleGetNewMessage();
  },
});
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.main-body {
  width: 100%;
  height: 100%;
}
.messageWrapper {
  width: 100%;
  height: 90%;
  overflow: scroll;
}
.clearfix::before,
.clearfix::after {
  content: '';
  display: table;
  clear: both;
}
.news {
  width: 100%;
  text-align: center;
  margin: auto;
  color: #2dc4d5;
}

/* Messages */

.inputWrapper {
  height: 10%;
  background-color: cadetblue;
  opacity: 0.4;
  overflow: hidden;
}
.vs-input-parent {
  /* position: absolute;
    bottom: 20px; */
  width: 60%;
  margin-left: 10px;
  display: inline-block;
}
.vs-input {
  width: 100%;
}
.submit {
  margin-top: 15px;
  width: 100px;
  display: inline-block;
  margin-left: 20px;
  width: 30%;
}
.inner-wrapper {
  height: 900px;
}
#vs-input--3 {
  width: 100%;
}
.reminder {
  color: #2dc4d5;
  width: 100px;
  margin: auto;
}
</style>
