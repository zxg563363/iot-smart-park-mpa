import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue2OrgTree from 'vue2-org-tree'
import App from './index.vue'

Vue.use(Vue2OrgTree)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#company-info')
