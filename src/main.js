// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './index.js'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

