import Vue from 'vue';
import App from './App.vue';
import Vuesax from 'vuesax';
import VueCompositionAPI from '@vue/composition-api';
import 'vuesax/dist/vuesax.css'; // Vuesax styles
import 'animate.css';
import '@/assets/boxicons.min.css';

Vue.use(VueCompositionAPI);
Vue.use(Vuesax, {
  // options here
});
new Vue({
  render: (h) => h(App),
}).$mount('#app');
