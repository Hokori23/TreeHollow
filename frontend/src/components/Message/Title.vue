<template>
  <div class="message-box__title">
    <vs-alert :progress="progress" :hidden-content.sync="hidden">
      <template #title> 这是一个树洞 </template>
      你可以在这里自由地留言<br />我们不会收集你的任何信息
    </vs-alert>
  </div>
</template>
<script>
import { defineComponent, reactive, watch, ref } from '@vue/composition-api';
import { ls } from '@/utils/tool';

export default defineComponent({
  name: 'TitleComponent',
  setup() {
    // 只在首次进入的时候主动展示TitleContent
    const cacheKey = 'hasShowedTitleContent';
    const hasShowedTitleContent = ls.get(cacheKey);
    const hidden = ref(hasShowedTitleContent);
    const data = reactive({
      time: 6000,
      progress: 0,
      interval: null,
      hidden,
    });

    const clearSideEffect = () => {
      data.interval && clearInterval(data.interval);
      data.progress = 0;
      data.time = null;
      ls.set(cacheKey, true);
    };

    watch(
      hidden,
      (val) => {
        if (!val && data.time !== null) {
          data.interval = setInterval(() => {
            if (data.progress === 100) {
              data.hidden = true;
              clearSideEffect();
            }
            data.progress++;
          }, data.time / 100);
        } else {
          clearSideEffect();
        }
      },
      {
        immediate: true,
      },
    );
    return data;
  },
});
</script>
<style lang="scss">
.message-box__title {
  width: 100%;
  .vs-icon-plus {
    pointer-events: none;
  }
}
</style>
