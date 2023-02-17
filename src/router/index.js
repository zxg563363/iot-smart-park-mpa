/*
 * @Author: zxg 2326115534@qq.com
 * @Date: 2022-03-22 11:52:01
 * @LastEditors: zxg 2326115534@qq.com
 * @LastEditTime: 2023-02-17 22:23:19
 * @FilePath: \vue\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import Router from 'vue-router'
import companyBrief from '@/components/companyBrief'
import companyInfo from '@/components/companyInfo'
import companyOrg from '@/components/companyOrg'
import energyConsumption from '@/components/energyConsumption'
import energyConsumptionArea from '@/components/energyConsumptionArea'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'companyBrief',
      component: companyBrief
    },
    {
      path: '/',
      name: 'companyInfo',
      // eslint-disable-next-line no-undef
      component: companyInfo
    },
    {
      path: '/',
      name: 'companyOrg',
      // eslint-disable-next-line no-undef
      component: companyOrg
    },
    {
      path: '/',
      name: 'energyConsumption',
      // eslint-disable-next-line no-undef
      component: energyConsumption
    },
    {
      path: '/',
      name: 'energyConsumptionArea',
      // eslint-disable-next-line no-undef
      component: energyConsumptionArea
    }
  ]
})
