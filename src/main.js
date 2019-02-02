import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/font-awesome/css/font-awesome.min.css'
import 'iview/dist/styles/iview.css';
import '@/assets/common.css'
Vue.config.productionTip = false

import axios from './axios.js'
Vue.prototype.$axios = axios;
import { Input, Form, FormItem } from 'iview';
Vue.component('Input', Input);
Vue.component('Form', Form);
Vue.component('FormItem', FormItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
