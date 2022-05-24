<template>
  <div id="message-wrapper" class="message-wrapper" @touchstart="handleTouchStart" @click="handleTouchStart">
    <div id="message-box" class="message-box">
      <Title />
      <!-- <div class="message_input-box"> -->
        <MessageItem :messages="messageList" />
        <Input />
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onBeforeMount, nextTick } from '@vue/composition-api';
import Title from './Title.vue';
import MessageItem from './MessageItem.vue';
import Input from './Input.vue';
import useLoading from './useLoading';
import useRequest from './useRequest';
import usePan from './usePan';

export default defineComponent({
  name: 'MessageBox',
  components: {
    Title,
    MessageItem,
    Input,
  },
  setup: () => {
    const { loading, messageList, messageBox, handleGetNewMessage, handleGetOldMessage, handleSendMessage } =
      useRequest();
    useLoading(loading);
    const panObject = usePan({
      handleGetNewMessage,
      handleGetOldMessage,
    });

    onBeforeMount(async () => {
      // 初始化获取最近十条留言
      await handleGetNewMessage();
      // nextTick(() => {
      //   // 滚动到最底部
      //   console.log(messageList.value);
      //   const style = getComputedStyle(document.querySelector('#message-box'));
      //   const height = style.height.replace('px', '');
      //   window.scrollTo(0, Number(height));
      // });
    });

    return {
      messageList,
      messageBox,
      handleGetNewMessage,
      handleGetOldMessage,
      handleSendMessage,
      ...panObject,
    };
  },
});
</script>

<style lang="scss" scope>
.message-wrapper {
  display: flex;
  justify-content: center;
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
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 14px 20px;
  padding-bottom: 54px;
  box-sizing: border-box;
  border-radius: 5px 20px 20px 20px;
  background-color: #ffffff;
}
.message_input-box {
  position: relative;
  height: auto;
}
</style>
