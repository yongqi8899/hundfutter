import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueLazyload from 'vue-lazyload';
import './assets/global/css/reset.scss';
import './assets/global/css/main.scss';
import './assets/icofont/icofont.css';
import './components/global';

Vue.use(VueLazyload)
Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
