<template>
  <div>
    <div class="message" v-for="item in dataObj" :key="item.id">
      <div class="triangle"></div>
      <div size="large" 
      color="rgb(59,222,200)"
       gradient
       enter-active-class="animate__swing"
       :class="{'mess':true, 'message-item':true, 'isNew':item.isNew}"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Messages',
  props: ['dataObj'],
  updated() {
    console.log(this.dataObj);
  },
  
};
</script>

<style scoped>
.mess {
  margin-top: 20px;
  margin-left: 10px;
}
.message{
  position: relative;
}
.message-item {
  padding: 10px 10px;
  margin: 10px 10px;
  border: 3px solid transparent;
  border-radius: 10px;
  /* box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 -10px 30px -5px rgba(0, 0, 0, 0.05); */
  clip-path: circle(145% at 0 50%);
  white-space: pre-wrap;
  max-width: 60%;
  word-wrap: break-word;
  word-break: break-all;
  text-align: left;
  background-color: white;
  margin-left: 20px;
  display: inline-block;
}
.isNew{
  animation: slide 1s;
}
.triangle{
  position: absolute;
  top: 50%;
  left: -1px;
  transform: translateY(-50%);
  border-width: 10px;
  border-style: solid;
  border-color: transparent;
  border-right-color: white;
}

@keyframes slide {
  from{
    margin-left: 90%;
  }
  to{
    margin-left: 5%;
  }
}
</style>
