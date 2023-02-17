<template>
  <div
    class="energy-consumption-area"
  >
    <div class="card__item">
      <div class="title__content">
        <div class="title__left">
          <el-date-picker
            v-model="selectMonth"
            type="month"
            placeholder="选择月"
          />
        </div>
        <div class="title__right">
          <div class="hide__btn">
            收 起
          </div>
        </div>
      </div>
      <div class="energy_content">
        <div class="info-item">
          <div class="left-icon">
            <img
              src="/static/images/en-yl1.png"
              class="img-bottom"
            >
            <img
              src="/static/images/en-yl2.png"
              class="img-top"
            >
          </div>
          <div class="right-info">
            <div class="name">
              用电量
            </div>
            <div class="value">
              <span class="num">1669.33</span>
              <span class="unit">kw·h</span>
            </div>
          </div>
        </div>
        <div class="compare-item">
          <div class="hb">
            <div class="name">
              环比
            </div>
            <img src="/static/images/ic-up.png">
            <div class="value">
              15.6 %
            </div>
          </div>
          <div class="tb">
            <div class="name">
              同比
            </div>
            <img src="/static/images/ic-down.png">
            <div class="value">
              15.6 %
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card__item power-compusion-compare">
      <div class="title__content">
        <div class="title__left">
          <div class="cn">
            用电量对比分析
          </div>
          <div class="en">
            Comparative analysis of power consumption
          </div>
        </div>
      </div>
      <div class="power-compusion-compare__content">
        <v-chart
          :options="powerConsumptionCompareOption"
          class="compare-chart"
          theme="dark"
          autoresize
        />
      </div>
    </div>
    <div class="card__item power-compusion-ratio">
      <div class="title__content">
        <div class="title__left">
          <div class="cn">
            用电量占比分析
          </div>
          <div class="en">
            Analysis of power consumption ratio
          </div>
        </div>
      </div>
      <div class="power-compusion-ratio__content">
        <v-chart
          :options="powerConsumptionRatioOption"
          class="ratio-chart"
          theme="dark"
          autoresize
        />
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts'
import { getEnergyFlowDiagram } from '@/api/common'
import _ from 'lodash'

export default {
  name: 'EnergyConsumptionArea',
  data () {
    const date = new Date()
    return {
      selectMonth: `${date.getFullYear()}-${date.getMonth() + 1}`
    }
  },
  computed: {
    powerConsumptionCompareOption () {
      const option = {
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '2%',
          top: '16%',
          containLabel: true
        },
        legend: {
          data: ['近期', '同期'],
          right: 10,
          top: 12,
          textStyle: {
            color: '#fff'
          },
          itemWidth: 12,
          itemHeight: 10
          // itemGap: 35
        },
        xAxis: {
          type: 'category',
          data: ['6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisLine: {
            lineStyle: {
              color: 'white'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
              fontFamily: 'Microsoft YaHei'
            }
          }
        },
        yAxis: {
          name: 'kw·h',
          type: 'value',
          // max: '1200',
          axisLine: {
            show: false,
            lineStyle: {
              color: 'white'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.3)'
            }
          },
          axisLabel: {}
        },
        series: [
          {
            name: '近期',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgba(86, 194, 255, 1)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(47, 85, 161, 0)'
                  }
                ]),
                barBorderRadius: 12
              }
            },
            data: [400, 400, 300, 300, 300, 400, 400, 400]
          },
          {
            name: '同期',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgba(54, 206, 159, 1)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(34, 122, 94, 0)'
                  }
                ]),
                barBorderRadius: 11
              }
            },
            data: [400, 500, 500, 500, 500, 400, 400, 500]
          }
        ]
      }

      return option
    },
    powerConsumptionRatioOption () {
      const objData = [
        { name: '空调', value: 500 },
        { name: '卡座', value: 365 },
        { name: '照明', value: 260 },
        { name: '其他', value: 153 }
      ]
      const getPercent = (name) => {
        const total = _.sumBy(objData, 'value')
        const itemValue = objData.find((od) => od.name === name)?.value || 0
        console.log(total, itemValue)
        return (itemValue * 100 / total).toFixed(2)
      }
      const option = {
        backgroundColor: 'transparent',
        color: ['#3580E9', '#00BAFF', '#FBD767', '#FA985F', '#EE6B70', '#29EB99', '#5470c6', '#B0D4FB'],
        tooltip: {
          trigger: 'item',
          // formatter: '{a} <br/>{b}: {c}万元 ({d}%)',
          formatter (params) {
            const { marker, name, value, percent } = params
            return `${marker} ${name}: ${value}kw·h (${percent}%)`
          }
        },
        legend: {
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
          formatter (name) {
            const item = objData.find((od) => od.name === name)
            return `{title| ${name} } {value| ${item.value} kw·h}  {value|${getPercent(name)}%}`
          },
          textStyle: {
            rich: {
              title: {
                fontSize: 16,
                lineHeight: 30,
                color: 'rgba(255, 255, 255, 0.8)'
              },
              value: {
                fontSize: 16,
                lineHeight: 20,
                fontWeight: 700,
                color: '#fff'
              }
            }
          }
        },
        series: [
          {
            name: '用电量占比分析',
            type: 'pie',
            center: ['25%', '50%'],
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: false,
                fontSize: '40',
                fontWeight: 'bold',
                color: '#fff'
              }
            },
            labelLine: {
              show: false
            },
            data: objData
          }
        ]
      }

      return option
    }
  },

  created () {},

  mounted () {},

  methods () {
    return {
      getEnergyFlowData () {
        getEnergyFlowDiagram(0)
          .then((res) => {
            this.eneryFlowData = res?.data?.data || {
              data: [],
              links: []
            }
          })
          .catch((err) => {
            console.error(err)
          })
      }
    }
  }

}
</script>
<style lang="less">
.el-picker-panel {
  background: rgba(0, 0, 0, 0.85) !important;
  color: #fff !important;

  [class*='el-picker-panel'],
  [class*='el-date-picker'] {
    color: #fff;
  }
}

.el-month-table td .cell {
  color: #fff !important;

  &:hover {
    color: #409eff !important;
  }
}

.el-month-table td.current:not(.disabled) .cell {
  color: #409eff !important;
}

.energy-consumption-area {
  width: 600px;
  // height: 800px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  padding: 30px;

  .el-date-editor {
    width: 130px;

    .el-input__inner {
      background: transparent;
      color: #fff;
      font-size: 18px;
    }
  }

  .card__item {
    &:not(:first-child) {
      border-top: 1px solid rgba(255, 255, 255, 0.6);
      padding-top: 20px;
    }

    .title__content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .cn {
        font-size: 18px;
      }
      .en {
        color: #707070;
      }

      .hide__btn {
        width: 69px;
        height: 40px;
        border-radius: 12px;
        border: 1px solid #ffffff;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }

  .energy_content {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;

    .info-item {
      display: flex;
      padding: 10px;
      margin: 15px 0;
      width: 60%;

      &:not(:last-child) {
        border-right: 1px solid rgba(255, 255, 255, 0.2);
      }

      .left-icon {
        height: 60px;
        width: 60px;

        .img-top {
          position: relative;
          top: -40px;
          left: 5px;
        }
      }

      .name {
        font-size: 18px;
        letter-spacing: 0.78px;
        margin-bottom: 10px;
      }

      .value {
        font-size: 22px;
        letter-spacing: 0.78px;
      }

      .unit {
        margin-left: 10px;
        font-size: 18px;
      }
    }

    .compare-item {
      width: 40%;
      margin: 30px 15px;

      .tb,
      .hb {
        display: flex;
        justify-content: space-around;
      }
    }
  }

  .power-compusion-compare {
    &__content {
      height: 300px;

      .compare-chart {
        width: 100%;
        height: 100%;
      }
    }

    .no-data {
      height: calc(100% - 42px);
      text-align: center;
      line-height: 18;
    }
  }

  .power-compusion-ratio {
    &__content {
      height: 300px;

      .ratio-chart {
        width: 100%;
        height: 100%;
      }
    }

    .no-data {
      height: calc(100% - 42px);
      text-align: center;
      line-height: 18;
    }
  }
}
</style>
