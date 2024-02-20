<template>
  <div class='echarts-box' :id='echartId'></div>
</template>

<script>
import echart from 'echarts'
export default {
  name: 'echart',
  props: {
    optionData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      theme: {
        'color': [
          '#427cfb',
          '#f35352',
          '#3fb27e',
          '#f88d48',
          '#69d4db',
          '#ce62d6',
          '#9bcc66',
          '#f7cb4a',
          '#51b4f1',
          '#8954d4'
        ],
        'backgroundColor': 'rgba(0,0,0,0)',
        'textStyle': {},
        'title': {
          'textStyle': {
            'color': '#515a6f'
          },
          'subtextStyle': {
            'color': '#868ea1'
          }
        },
        'line': {
          'itemStyle': {
            'normal': {
              'borderWidth': '2'
            }
          },
          'lineStyle': {
            'normal': {
              'width': '2'
            }
          },
          'symbolSize': '10',
          'symbol': 'emptyCircle',
          'smooth': true
        },
        'radar': {
          'itemStyle': {
            'normal': {
              'borderWidth': '2'
            }
          },
          'lineStyle': {
            'normal': {
              'width': '2'
            }
          },
          'symbolSize': '10',
          'symbol': 'emptyCircle',
          'smooth': true
        },
        'bar': {
          'itemStyle': {
            'normal': {
              'barBorderWidth': '0',
              'barBorderColor': '#ccc'
            },
            'emphasis': {
              'barBorderWidth': '0',
              'barBorderColor': '#ccc'
            }
          }
        },
        'pie': {
          'itemStyle': {
            'normal': {
              'borderWidth': '0',
              'borderColor': '#ccc'
            },
            'emphasis': {
              'borderWidth': '0',
              'borderColor': '#ccc'
            }
          }
        },
        'scatter': {
          'itemStyle': {
            'normal': {
              'borderWidth': '0',
              'borderColor': '#ccc'
            },
            'emphasis': {
              'borderWidth': '0',
              'borderColor': '#ccc'
            }
          }
        },
        'boxplot': {
          'itemStyle': {
            'normal': {
              'borderWidth': '0',
              'borderColor': '#ccc'
            },
            'emphasis': {
              'borderWidth': '0',
              'borderColor': '#ccc'
            }
          }
        },
        'parallel': {
          'itemStyle': {
            'normal': {
              'borderWidth': '0',
              'borderColor': '#ccc'
            },
            'emphasis': {
              'borderWidth': '0',
              'borderColor': '#ccc'
            }
          }
        },
        'sankey': {
          'itemStyle': {
            'normal': {
              'borderWidth': '0',
              'borderColor': '#ccc'
            },
            'emphasis': {
              'borderWidth': '0',
              'borderColor': '#ccc'
            }
          }
        },
        'funnel': {
          'itemStyle': {
            'normal': {
              'borderWidth': '0',
              'borderColor': '#ccc'
            },
            'emphasis': {
              'borderWidth': '0',
              'borderColor': '#ccc'
            }
          }
        },
        'gauge': {
          'itemStyle': {
            'normal': {
              'borderWidth': '0',
              'borderColor': '#ccc'
            },
            'emphasis': {
              'borderWidth': '0',
              'borderColor': '#ccc'
            }
          }
        },
        'candlestick': {
          'itemStyle': {
            'normal': {
              'color': '#edafda',
              'color0': 'transparent',
              'borderColor': '#d680bc',
              'borderColor0': '#8fd3e8',
              'borderWidth': '2'
            }
          }
        },
        'graph': {
          'itemStyle': {
            'normal': {
              'borderWidth': '0',
              'borderColor': '#ccc'
            }
          },
          'lineStyle': {
            'normal': {
              'width': 1,
              'color': '#aaaaaa'
            }
          },
          'symbolSize': '10',
          'symbol': 'emptyCircle',
          'smooth': true,
          'color': [
            '#427cfb',
            '#f35352',
            '#3fb27e',
            '#f88d48',
            '#69d4db',
            '#ce62d6',
            '#9bcc66',
            '#f7cb4a',
            '#51b4f1',
            '#8954d4'
          ],
          'label': {
            'normal': {
              'textStyle': {
                'color': '#868ea1'
              }
            }
          }
        },
        'map': {
          'itemStyle': {
            'normal': {
              'areaColor': '#f3f3f3',
              'borderColor': '#516b91',
              'borderWidth': 0.5
            },
            'emphasis': {
              'areaColor': '#a5e7f0',
              'borderColor': '#516b91',
              'borderWidth': 1
            }
          },
          'label': {
            'normal': {
              'textStyle': {
                'color': '#000'
              }
            },
            'emphasis': {
              'textStyle': {
                'color': '#516b91'
              }
            }
          }
        },
        'geo': {
          'itemStyle': {
            'normal': {
              'areaColor': '#f3f3f3',
              'borderColor': '#516b91',
              'borderWidth': 0.5
            },
            'emphasis': {
              'areaColor': '#a5e7f0',
              'borderColor': '#516b91',
              'borderWidth': 1
            }
          },
          'label': {
            'normal': {
              'textStyle': {
                'color': '#000'
              }
            },
            'emphasis': {
              'textStyle': {
                'color': '#516b91'
              }
            }
          }
        },
        'categoryAxis': {
          'axisLine': {
            'show': true,
            'lineStyle': {
              'color': '#7d7d7d'
            }
          },
          'axisTick': {
            'show': false,
            'lineStyle': {
              'color': '#333'
            }
          },
          'axisLabel': {
            'show': true,
            'textStyle': {
              'color': '#868ea1'
            }
          },
          'splitLine': {
            'show': true,
            'lineStyle': {
              'color': [
                '#ededed'
              ]
            }
          },
          'splitArea': {
            'show': false,
            'areaStyle': {
              'color': [
                'rgba(250,250,250,0.05)',
                'rgba(200,200,200,0.02)'
              ]
            }
          }
        },
        'valueAxis': {
          'axisLine': {
            'show': true,
            'lineStyle': {
              'color': '#7d7d7d'
            }
          },
          'axisTick': {
            'show': false,
            'lineStyle': {
              'color': '#333'
            }
          },
          'axisLabel': {
            'show': true,
            'textStyle': {
              'color': '#868ea1'
            }
          },
          'splitLine': {
            'show': true,
            'lineStyle': {
              'color': [
                '#ededed'
              ]
            }
          },
          'splitArea': {
            'show': false,
            'areaStyle': {
              'color': [
                'rgba(250,250,250,0.05)',
                'rgba(200,200,200,0.02)'
              ]
            }
          }
        },
        'logAxis': {
          'axisLine': {
            'show': true,
            'lineStyle': {
              'color': '#7d7d7d'
            }
          },
          'axisTick': {
            'show': false,
            'lineStyle': {
              'color': '#333'
            }
          },
          'axisLabel': {
            'show': true,
            'textStyle': {
              'color': '#868ea1'
            }
          },
          'splitLine': {
            'show': true,
            'lineStyle': {
              'color': [
                '#ededed'
              ]
            }
          },
          'splitArea': {
            'show': false,
            'areaStyle': {
              'color': [
                'rgba(250,250,250,0.05)',
                'rgba(200,200,200,0.02)'
              ]
            }
          }
        },
        'timeAxis': {
          'axisLine': {
            'show': true,
            'lineStyle': {
              'color': '#7d7d7d'
            }
          },
          'axisTick': {
            'show': false,
            'lineStyle': {
              'color': '#333'
            }
          },
          'axisLabel': {
            'show': true,
            'textStyle': {
              'color': '#868ea1'
            }
          },
          'splitLine': {
            'show': true,
            'lineStyle': {
              'color': [
                '#ededed'
              ]
            }
          },
          'splitArea': {
            'show': false,
            'areaStyle': {
              'color': [
                'rgba(250,250,250,0.05)',
                'rgba(200,200,200,0.02)'
              ]
            }
          }
        },
        'toolbox': {
          'iconStyle': {
            'normal': {
              'borderColor': '#999999'
            },
            'emphasis': {
              'borderColor': '#666666'
            }
          }
        },
        'legend': {
          'textStyle': {
            'color': '#515a6f'
          }
        },
        'tooltip': {
          'axisPointer': {
            'lineStyle': {
              'color': '#cccccc',
              'width': 1
            },
            'crossStyle': {
              'color': '#cccccc',
              'width': 1
            }
          }
        },
        'timeline': {
          'lineStyle': {
            'color': '#515a6f',
            'width': 1
          },
          'itemStyle': {
            'normal': {
              'color': '#515a6f',
              'borderWidth': 1
            },
            'emphasis': {
              'color': '#515a6f'
            }
          },
          'controlStyle': {
            'normal': {
              'color': '#515a6f',
              'borderColor': '#515a6f',
              'borderWidth': 0.5
            },
            'emphasis': {
              'color': '#515a6f',
              'borderColor': '#515a6f',
              'borderWidth': 0.5
            }
          },
          'checkpointStyle': {
            'color': '#515a6f',
            'borderColor': 'rgba(138,124,168,0.37)'
          },
          'label': {
            'normal': {
              'textStyle': {
                'color': '#515a6f'
              }
            },
            'emphasis': {
              'textStyle': {
                'color': '#515a6f'
              }
            }
          }
        },
        'visualMap': {
          'color': [
            '#515a6f',
            '#59c4e6',
            '#a5e7f0'
          ]
        },
        'dataZoom': {
          'backgroundColor': 'rgba(0,0,0,0)',
          'dataBackgroundColor': 'rgba(255,255,255,0.3)',
          'fillerColor': 'rgba(167,183,204,0.4)',
          'handleColor': '#a7b7cc',
          'handleSize': '100%',
          'textStyle': {
            'color': '#515a6f'
          }
        },
        'markPoint': {
          'label': {
            'normal': {
              'textStyle': {
                'color': '#868ea1'
              }
            },
            'emphasis': {
              'textStyle': {
                'color': '#868ea1'
              }
            }
          }
        }
      }
    }
  },
  created() {
    this.echartId = Math.random().toString(36).substr(2)
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let key = document.getElementById(this.echartId)
      echart.registerTheme('report-ui', this.theme)
      this.myChart = echart.init(key, 'report-ui')

      let eOption = JSON.parse(JSON.stringify(this.optionData))

      this.myChart.setOption(eOption, true)
    },
    changeOption(val, old) {
      if (this.myChart) {
        if (val) {
          this.myChart.setOption(val, true)
        } else {
          this.myChart.setOption(old, true)
        }
      } else {
        this.init()
      }
    }
  },
  watch: {
    optionData: {
      handler: 'changeOption',
      deep: true
    }
  }
}
</script>

<style>
.echarts-box {
  width: 100%;
  height: 100%;
}
</style>
