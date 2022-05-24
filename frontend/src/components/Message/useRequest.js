import { ref, nextTick } from '@vue/composition-api';
import { getMessage, sendMessage } from '@/api/messagesv2.js';
export default () => {
  const messageList = ref([]);
  const messageBox = ref(null);

  const topTips = ref('');
  const bottomTips = ref('');

  const loadingTop = ref(false);
  const loadingBottom = ref(false);
  const loadingSend = ref(false);

  // 下拉获取新数据
  const handleGetNewMessage = async (createdAt, before) => {
    loadingBottom.value = true;
    const { data } = await getMessage(10, createdAt, before);

    // 处理数据
    messageList.value.push(...(data?.message || []));
    loadingBottom.value = false;
  };

  // 上拉获取历史数据
  const handleGetOldMessage = async (createdAt) => {
    loadingTop.value = true;
    const { data } = await getMessage(5, createdAt, true);

    // 处理数据
    messageList.value.unshift(...(data?.message || []));
    loadingTop.value = false;
  };

  // 发送数据
  const handleSendMessage = async (content) => {
    if (!content) return;
    loadingSend.value = true;
    const { data } = await sendMessage(content);

    // 处理数据
    messageList.value.unshift(...(data?.message || []));
    loadingSend.value = false;
  };

  return {
    loading: {
      loadingBottom,
      loadingTop,
      loadingSend,
    },
    messageList,
    messageBox,
    handleGetNewMessage,
    handleGetOldMessage,
    handleSendMessage,
  };
};
