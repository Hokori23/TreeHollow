<template>
  <div>
    <div v-for="item in messages" :key="item.id" class="message-item">{{ item.content }}</div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MessageItem',
  props: {
    messages: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
});
</script>

<style lang="scss" scoped>
.message-item {
  max-width: 200px;
  padding: 15px;
  margin: 12px 0;
  border: 3px solid transparent;
  border-left: 3px solid rgb(var(--vs-cyan));
  border-radius: 20px;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 -10px 30px -5px rgba(0, 0, 0, 0.05);
  clip-path: circle(145% at 0 50%);
  white-space: pre-wrap;
}
</style>
