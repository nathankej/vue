import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
// import VueimpResource from 'vue-resource'
import axios from 'axios'
import VueAxios from 'vue-axios'
// axios做请求 。
// axios.get() axios.post()
//https://news-at.zhihu.com/api/4/news/:id 内容接口
// /detail/3892357


Vue.use(router)
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  render: h => h(App),
})
