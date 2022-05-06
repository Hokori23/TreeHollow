<template>
  <div></div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { getEventBus } from '@/utils/event-bus';

export default defineComponent({
  name: 'NotificationBox',
  methods: {
    notify(props) {
      this.$vs.notification({
        sticky: true,
        color: 'primary',
        ...props,
      });
    },
  },
  beforeMount() {
    const eventBus = getEventBus();
    eventBus.$on('notify', this.notify);
  },
});
</script>
