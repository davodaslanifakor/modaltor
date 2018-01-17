import Vue from 'vue'
import App from './App.vue'
import VueModalTor from 'vue-modaltor'
Vue.use(VueModalTor)
let a = new Vue({
  
  el: '#app',
  render: h => h(App)
})


