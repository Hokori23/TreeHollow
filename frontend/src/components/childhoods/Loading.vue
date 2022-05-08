<template>
    <!-- <vs-button @click="openLoading">Open Loading</vs-button> -->
    <div></div>
</template>

<script>

 export default {
   props:['state'],
   watch:{
     state(value){
       console.log(value);
       if(value == 2){
         this.openLoading();
       }
     }
   },
    methods: {
      openLoading() {
        const loading = this.$vs.loading()
        const id = setTimeout(() => {
          loading.close();
        }, 1000)
        
      }
    }
}
</script>


