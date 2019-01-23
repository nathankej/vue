import Vue from 'vue'
import App from './App.vue'
import router from './router.js' //router这里import 要小写，以后使用Vuex的时候也需要使用小写

Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  render: h => h(App),
})
