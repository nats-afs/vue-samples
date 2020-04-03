import Vue from 'vue'
import App from './App.vue'
// import VueQrcode from '@chenfengyuan/vue-qrcode';
import './registerServiceWorker'
import router from './router'
import store from './store'

// Vue.use(VueQrcode.name,VueQrcode)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
