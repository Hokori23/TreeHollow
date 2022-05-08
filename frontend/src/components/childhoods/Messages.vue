<template>
  <div >
    <div class="message" v-for="item in dataObj" :key="item.id">
      <vs-button size="large" color="rgb(59,222,200)" gradient class="mess">
        {{ item.content }}
      </vs-button>
    </div>
  </div>
</template>

<script>
 export default {
   // eslint-disable-next-line vue/multi-word-component-names
   name:'Messages',
   props:['dataObj']
 }
</script>

<style scoped>
.mess {
  margin-top: 20px;
  margin-left: 10px;
}
</style>
