import { ref, watch, getCurrentInstance } from '@vue/composition-api';

export default (loading) => {
  const vm = getCurrentInstance();
  Object.keys(loading).forEach((key) => {
    const loadingInstance = ref(null);
    watch(loading[key], (_loading) => {
      if (_loading) {
        loadingInstance.value = vm.$vs?.loading?.();
      } else {
        loadingInstance.value?.close?.();
      }
    });
  });
};
