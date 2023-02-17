<!--
 * @Author: zxg 2326115534@qq.com
 * @Date: 2023-02-17 20:47:44
 * @LastEditors: zxg 2326115534@qq.com
 * @LastEditTime: 2023-02-17 22:25:17
 * @FilePath: \iot-smart-park-mpa\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <el-row>
      <el-col :span="8">
        <h3 class="navTitle">
          地图首页左上角公司简介
        </h3>
        <companyBrief />
      </el-col>
      <el-col :span="8">
        <h3 class="navTitle">
          地图首页右上角公司组织
        </h3>
        <companyOrg />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="14">
        <h3 class="navTitle">
          园区能耗分析
        </h3>
        <energyConsumption />
      </el-col>
      <el-col :span="10">
        <h3 class="navTitle">
          区域能耗分析
        </h3>
        <energyConsumptionArea />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <h3 class="navTitle">
          公司简介
        </h3>
        <companyInfo />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import companyBrief from './components/companyBrief'
import companyInfo from './components/companyInfo'
import companyOrg from './components/companyOrg'
import energyConsumption from './components/energyConsumption'
import energyConsumptionArea from './components/energyConsumptionArea'
export default {
  name: 'App',
  components: {
    companyBrief: companyBrief,
    companyInfo: companyInfo,
    // eslint-disable-next-line vue/no-unused-components
    companyOrg: companyOrg,
    energyConsumption: energyConsumption,
    energyConsumptionArea: energyConsumptionArea
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navTitle {
  text-align: left;
  color: #333;
}
</style>
