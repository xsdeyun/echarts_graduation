import Vue from 'vue'
import App from './App.vue'
// 引入全局css
import '@/assets/global.css'
// 引入request
import ApiRequest from './api/request'
Vue.prototype.$request = ApiRequest;

// 引入echarts
import * as Echarts from 'echarts'
Vue.prototype.$echarts = Echarts
// 引入时间
import  Time from './time/time'
Vue.prototype.$time = Time
// 引入router
import router from './router/index.js'

// 引入组件
import '@/components/index'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
