import { onMounted, ref, computed } from '@vue/composition-api';
import { getStyle, getEl } from '@/utils/tool';

export default ({ handleGetNewMessage, handleGetOldMessage }) => {
  const elName = '#message-box';
  const listeningPan = ref(false);
  const offset = ref(0);
  const startY = ref(0);
  const available = ref(false); // 下拉到可以请求的状态
  const direction = ref('top');

  const transform = computed(() => `transform3d(0, ${offset.value}px, 0)`);

  const handleTouchStart = (e) => {
    const el = getEl(elName);
    const style = getStyle(elName);
    const { scrollTop } = el || {};
    console.log(scrollTop, style.height, el.getBoundingClientRect());

    if (scrollTop !== 0 && scrollTop !== style.height) return;

    // 初始化状态
    offset.value = 0;
    startY.value = e.targetTouches[0].clientY;
    listeningPan.value = true;
  };

  const handleTouchMove = (e) => {
    if (!listeningPan.value) return;
    const _offset = e.targetTouches[0].clientY - startY.value;
    if (_offset > 0) {
      e.preventDefault();
      // 增加阻力
      offset.value = Math.pow(_offset, 0.8);
      //下拉到一定距离 示意松手
      available.value = offset.value > 50; // icon变化
    }
  };

  const handleTouchEnd = () => {
    listeningPan.value = false;
    if (available.value > 50) {
    }
  };

  return {
    transform,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};
