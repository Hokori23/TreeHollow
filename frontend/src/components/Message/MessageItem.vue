<template>
  <div class="message-item">
    test test test testtest test test testtest test test testtest test test testtest test test testtest test test
    testtest test test test
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MessageItem',
  setup() {},
});
</script>

<style lang="scss" scoped>
.message-item {
  max-width: 200px;
  padding: 20px 10px;
  margin: 10px 0;
  border: 3px solid transparent;
  border-left: 3px solid rgb(var(--vs-cyan));
  border-radius: 20px;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 -10px 30px -5px rgba(0, 0, 0, 0.05);
  clip-path: circle(145% at 0 50%);
  white-space: pre-wrap;
}
</style>
