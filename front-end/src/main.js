import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import router from './router'
import Vuex from 'vuex'
import {store} from './store'


Vue.config.productionTip = false
Vue.prototype.$http = axios

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

new Vue({
  vuetify,
  router,
  Vuex,
  store,
  render: h => h(App)
}).$mount('#app')
