<template>
  <div class="message-wrapper">
    <div class="message-box">
      <Title />
      <MessageItem />
      <vs-input color="rgb(59,222,200)" v-model="curContent" icon-after placeholder="Success">
        <template #icon> <i class="bx bx-mail-send" /> </template>
      </vs-input>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api';
import Title from './Title.vue';
import MessageItem from './MessageItem.vue';

export default defineComponent({
  name: 'MessageBox',
  components: {
    Title,
    MessageItem,
  },
  setup: () => {
    return {
      curContent: ref(''),
      isSending: ref(false),
    };
  },
});
</script>

<style lang="scss" scope>
.message-wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  background-color: #f4f7f8;

  @media screen and (max-width: 600px) {
    padding: 0;
  }
}
.message-box {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  height: 100%;
  margin: 0 auto;
  padding: 14px 20px;
  box-sizing: border-box;
  border-radius: 5px 20px 20px 20px;
  background-color: #ffffff;
}
</style>
