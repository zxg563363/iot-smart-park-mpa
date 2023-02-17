/*
 * @Author: zxg 2326115534@qq.com
 * @Date: 2023-02-17 20:47:44
 * @LastEditors: zxg 2326115534@qq.com
 * @LastEditTime: 2023-02-17 21:22:12
 * @FilePath: \iot-smart-park-mpa\src\pages\Home\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.config.productionTip = false
/* eslint-disable no-new */

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
