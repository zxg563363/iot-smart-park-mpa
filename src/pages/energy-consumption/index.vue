<template>
  <div
    class="energy-consumption-ana"
  >
    <el-tabs
      tab-position="left"
      stretch
      type="card"
    >
      <el-tab-pane label="能耗分析">
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
            <div
              v-for="item in energyList"
              :key="`energy-info-${item.id}`"
              class="info-item"
            >
              <div class="left-icon">
                <img
                  :src="`/static/images/${item.ic}1.png`"
                  class="img-bottom"
                >
                <img
                  :src="`/static/images/${item.ic}2.png`"
                  class="img-top"
                >
              </div>
              <div class="right-info">
                <div class="name">
                  {{ item.name }}
                </div>
                <div class="value">
                  <span class="num">{{ item.use }}</span>
                  <span class="unit">{{ item.unit }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card__item energy-flow">
          <div class="title__content">
            <div class="title__left">
              <div class="cn">
                能流图
              </div>
              <div class="en">
                Energy flow diagram
              </div>
            </div>
          </div>
          <div class="energy-flow__content">
            <v-chart
              v-if="eneryFlowData.links.length"
              :options="energyChartOptions"
              class="energy-chart"
              theme="dark"
              autoresize
            />
            <div
              v-else
              class="no-data"
            >
              <span>暂无数据</span>
            </div>
          </div>
        </div>
        <div
          class="card__item power-compusion"
          style="display: flex"
        >
          <div class="comsuption-compare w100 h100">
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
            <div class="comsuption-compare__content">
              <v-chart
                :options="powerconsumptionCompareOption"
                class="comsuption-compare-chart"
                theme="dark"
                autoresize
              />
            </div>
          </div>
          <div class="comsuption-top-info w100 h100">
            <div class="title__content">
              <div class="title__left">
                <div class="cn">
                  区域用电量top5
                </div>
                <div class="en">
                  Regional power consumption top5
                </div>
              </div>
            </div>
            <div class="comsuption-top-info__content">
              <v-chart
                :options="powerconsumptionTopOption"
                class="comsuption-top-info-chart"
                theme="dark"
                autoresize
              />
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="节能策略">
        <div class="card__item power-saving-strategy">
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
          <div class="strategy_content">
            <div
              v-for="item in energySavingStrategyList"
              :key="`strategy-info-${item.id}`"
              class="info-item"
            >
              <div class="icon">
                <img :src="`/static/images/${item.ic}.png`">
              </div>
              <div class="info">
                <div class="name">
                  {{ item.name }}
                </div>
                <div class="en">
                  {{ item.en }}
                </div>
              </div>
              <div class="count">
                {{ item.details.length }}
              </div>
            </div>
          </div>
        </div>
        <div class="card-item" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { getEnergyFlowDiagram } from '@/api/common'
import _ from 'lodash'

export default {
  name: 'EnergyConsumption',
  data () {
    const date = new Date()
    return {
      selectMonth: `${date.getFullYear()}-${date.getMonth() + 1}`,
      energyList: [
        {
          id: '1',
          name: '市电(南网)',
          use: '4200.13',
          unit: 'kw·h',
          ic: 'en-yl'
        },
        {
          id: '2',
          name: '绿电(光伏)',
          use: '2000.68',
          unit: 'kw·h',
          ic: 'en-gl'
        },
        // {
        //   id: '3',
        //   name: '储电',
        //   use: '7000.65',
        //   unit: 'kw·h',
        //   ic: 'en-bb'
        // },
        {
          id: '4',
          name: '用电',
          use: '1636.98',
          unit: 'kw·h',
          ic: 'en-gb'
        }
      ],
      // 能流图
      eneryFlowData: {
        data: [],
        links: []
      },
      selectStrategyItem: '1',
      // 节能策略
      energySavingStrategyList: [
        {
          id: '1',
          name: '照明节能策略',
          en: 'Lighting energy saving Strategies',
          ic: 'ic-lamp',
          details: [
            '根据环境光度变化、时段，自动调节照明亮度。',
            '在自然光不充分时，楼梯间、公共走廊、电梯厅等公共空间，杜绝常亮，做到人来灯亮人走灯灭。',
            '每年定期检查照明设备提醒，支持使用照明设备。'
          ]
        },
        {
          id: '2',
          name: '空调节能策略',
          en: 'Energy-saving Strategies of air conditioning',
          ic: 'ic-aircondition',
          details: [
            '根据环境光度变化、时段，自动调节照明亮度。',
            '在自然光不充分时，楼梯间、公共走廊、电梯厅等公共空间，杜绝常亮，做到人来灯亮人走灯灭。',
            '每年定期检查照明设备提醒，支持使用照明设备。'
          ]
        },
        {
          id: '3',
          name: '卡位插座节能策略',
          en: 'Energy saving strategy of card socket',
          ic: 'ic-plug',
          details: [
            '根据环境光度变化、时段，自动调节照明亮度。',
            '在自然光不充分时，楼梯间、公共走廊、电梯厅等公共空间，杜绝常亮，做到人来灯亮人走灯灭。',
            '每年定期检查照明设备提醒，支持使用照明设备。'
          ]
        },
        {
          id: '4',
          name: '电梯节能策略',
          en: 'Elevator energy saving Strategies',
          ic: 'ic-elevator',
          details: [
            '根据环境光度变化、时段，自动调节照明亮度。',
            '在自然光不充分时，楼梯间、公共走廊、电梯厅等公共空间，杜绝常亮，做到人来灯亮人走灯灭。',
            '每年定期检查照明设备提醒，支持使用照明设备。'
          ]
        }
      ]
    }
  },

  computed: {
    energyChartOptions () {
      const { eneryFlowData } = this
      const { data, links } = eneryFlowData
      const option = {
        color: [
          '#0BE3E6',
          '#CE73FB',
          '#5485E7',
          '#5ED295',
          '#B8709F',
          '#C38955',
          '#1D7BAD',
          '#C2AA3D',
          '#2CFEF1',
          '#2AA8FC'
        ],
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: {
          type: 'sankey',
          left: 20,
          right: 140,
          top: 10,
          bottom: 10,
          layout: 'none',
          emphasis: {
            focus: 'adjacency'
          },
          label: {
            color: '#fff',
            fontSize: '12px'
          },
          lineStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: '#136bff'
              },
              {
                offset: 1,
                color: '#87ffd6'
              }
            ]),
            curveness: 0.5, // 设置边的曲度
            opacity: 0.5 // 设置边的透明度
          },
          data,
          links
        }
      }

      return option
    },
    powerconsumptionCompareOption () {
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
    powerconsumptionTopOption () {
      const lightningIcon =
        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADmSURBVCiRfdCxS0JRFMfx79Hn06EhHNr6JwLnojXFyZBoqKVF0EUQobGmhjbH/gCdAkcdnMTJwUn/ADepQXIw+Lm8F7373vPAhXvO+ZzD5UJa6MpDlSmqngN4qZDTEVCC3Fc6VO0TuATW2GCbDHU3BrsOsnlYjkI9yRkbxKEa9YRHrKJQ7S7oFcxxuT9o6LkFeieuAFuCNgF8+QYVgoYPShhwt+jtA3iMMy0y0UL+BnyiJ9+HnwvnH/0zZ9UMig9Y89eBJ+FlC3Sw+15YcDcC2oGVsdvJ/44DvT1kW1h1wtHQsJ3WOgBcEjdlIHddZwAAAABJRU5ErkJggg=='
      const valueData = [3723.68, 2763.88, 2549.48, 2263.49, 1863.48]
      const maxValue = _.max(valueData)
      const option = {
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: '{b0}: {c0}'
        },
        grid: {
          left: '2%',
          right: '10%',
          bottom: '5%',
          top: '10%',
          containLabel: true
        },
        legend: {
          show: false,
          textStyle: {
            color: '#fff'
          },
          itemWidth: 12,
          itemHeight: 10
          // itemGap: 35
        },
        yAxis: {
          type: 'category',
          inverse: true,
          data: ['酒店', '食堂', '1F停车场', '1F大厅', '大数据事业部'],
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
        xAxis: {
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
            name: '用电量',
            type: 'bar',
            barWidth: '15',
            label: {
              show: true,
              position: 'insideRight',
              offset: [0, 1],
              color: '#fff',
              fontSize: 12
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: 'rgba(34, 122, 94, 0.01)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(54, 206, 159, 1)'
                  }
                ])
                // barBorderRadius: 12,
              }
            },
            data: valueData
          },
          {
            name: '背景',
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            data: _.map(valueData, () => maxValue),
            itemStyle: {
              normal: {
                color: 'rgba(255, 255, 255, 0.2)'
              }
            }
          },
          {
            name: '顶部',
            type: 'pictorialBar',
            barGap: '-100%',
            symbol: 'rect',
            symbolPosition: 'end',
            symbolSize: [2, 17],
            symbolOffset: [2, 0],
            data: valueData,
            itemStyle: {
              normal: {
                color: 'rgba(28, 255, 183, 1)'
              }
            }
          },
          {
            name: 'glyph',
            type: 'pictorialBar',
            barGap: '-100%',
            symbolPosition: 'end',
            symbolSize: 12,
            symbolOffset: ['150%', 0],
            data: _.map(valueData, (v) => ({
              value: v,
              symbol: lightningIcon
            }))
          }
        ]
      }

      return option
    },
    strategyDetails () {
      const { selectStrategyItem, energySavingStrategyList } = this
      return energySavingStrategyList.find((ess) => ess.id === selectStrategyItem)?.details || []
    }
  },

  created () {
    this.getEnergyFlowData()
  },

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
            // elsint-disable-next-line
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

  [class*="el-picker-panel"],
  [class*="el-date-picker"] {
    color: #fff;
  }
}

.el-month-table td .cell {
  color: #fff !important;

  &:hover {
    color: #409EFF !important;
  }
}

.el-month-table td.current:not(.disabled) .cell {
  color: #409EFF !important;
}

.energy-consumption-ana {
  width: 1000px;
  height: 800px;
  box-sizing: border-box;

  .el-tabs {
    &__header {
      margin-right: 0 !important;
    }

    &__nav {
      border: none !important;
    }

    .el-date-editor {
      width: 130px;

      .el-input__inner {
        background: transparent;
        color: #fff;
        font-size: 18px;
      }
    }

    &__item {
      color: #fff;
      width: 100%;
      height: 120px;
      line-height: 60px;
      font-size: 18px;
      font-family: Source Han Sans CN, Source Han Sans CN-Bold;
      -ms-writing-mode: tb-lr;
      writing-mode: vertical-lr;
      -ms-writing-mode: tb-rl;
      writing-mode: tb-rl;
      text-align: center !important;
      letter-spacing: 2px;
      opacity: 0.9;
      background: rgba(0, 0, 0, 0.85);
      line-height: 27px;
      color: rgba(255, 255, 255, 1);
      text-align: left;
      vertical-align: top;
      padding: 0 10px;
      border-bottom-left-radius: 12px;
      border-top-left-radius: 12px;

      &.is-left {
        border-right: none !important;
      }

      &.is-active {
        border-bottom-left-radius: 12px;
        border-top-left-radius: 12px;
        color: rgba(0, 0, 0, 1);
        background: rgba(233, 244, 255, 1);
      }
    }

    &__content {
      background: rgba(0, 0, 0, 0.85);
      color: #fff;

      .el-tab-pane {
        padding: 30px;
      }
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

    .left-icon {
      height: 60px;
      width: 60px;

      .img-top {
        position: relative;
        top: -40px;
        left: 5px;
      }
    }

    .info-item {
      display: flex;
      padding: 10px 20px;
      margin: 15px 0;
      width: 100%;

      &:not(:last-child) {
        border-right: 1px solid rgba(255, 255, 255, 0.2);
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
  }

  .energy-flow {
    &__content {
      height: 320px;

      .energy-chart {
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

  .power-compusion {
    height: 300px;

    .comsuption-compare {
      &__content {
        width: 100%;
        height: calc(100% - 45px);

        .comsuption-compare-chart {
          width: 100%;
          height: 100%;
        }
      }
    }

    .comsuption-top-info {
      &__content {
        width: 100%;
        height: calc(100% - 45px);

        .comsuption-top-info-chart {
          width: 100%;
          height: 100%;
        }
      }
    }

    .no-data {
      height: calc(100% - 42px);
      text-align: center;
      line-height: 18;
    }
  }

  .power-saving-strategy {
    .strategy_content {
      margin: 20px 0;

      .info-item {
        display: flex;
        align-items: center;
        margin: 10px 0;
        padding: 10px 20px;
        border-radius: 8px;

        .icon {
          margin-right: 20px;
        }

        .count {
          font-size: 32px;
          float: right;
        }
      }
    }
  }
}
</style>
