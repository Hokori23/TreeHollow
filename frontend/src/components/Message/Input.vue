<template>
  <div class="input">
    <vs-input color="rgb(59,222,200)" v-model="curContent" icon-after placeholder="Success">
      <template #icon> <i class="bx bx-mail-send" @click="onClick" /> </template>
    </vs-input>
    <vs-button flat style="margin-left: 10px">提交</vs-button>
  </div>
</template>

<script>
import { defineComponent, ref, onBeforeMount } from '@vue/composition-api';
export default defineComponent({
  name: 'InputComponent',
  setup() {
    const curContent = ref('');
    return {
      curContent,
      onClick: () => console.log('click'),
    };
  },
});
</script>
<style lang="scss" scoped>
.input {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  width: 100%;
  @media screen and (max-width: 600px) {
    padding-bottom: 10px;
  }
}
</style>
