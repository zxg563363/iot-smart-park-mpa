import Vue from 'vue'
import ECharts from 'vue-echarts'
import * as echarts from 'echarts/lib/echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './index.vue'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
Vue.component('v-chart', ECharts)

new Vue({
  render: (h) => h(App)
}).$mount('#energy-consumption-area')
