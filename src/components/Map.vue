<template>
  <div class="map">
    <div class="com-map" ref="map_ref"></div>
  </div>
</template>

<script>
import china from "@/static/data/china.json"
export default {
  name: "xs-map",
    data() {
    return {
      time: null,
      chartInstance: null,
    };
  },
  mounted() {
    this.gettime();
    this.initChart();
    this.getData();
  },
  methods: {
    gettime() {
      setInterval(() => {
        this.time = this.$time.Timeday();
      }, 1000);
    },
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.map_ref);
    },
    async getData() {
      await this.updateChart();
    },
    updateChart() {
      // 初始化中国地图
      this.$echarts.registerMap("china", china);

      let option = {
        title: {
        //   text: 'Gradient Stacked Area Chart'
        },
        geo: {
          type: 'map',
          map: 'china',
          geoIndex: 1,
          showLegendSymbol: false, // 存在legend时显示
          tooltip: {
            show: false
          },
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true,
              textStyle: {
                color: '#02F6F9'
              }
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: '#091E64',
              borderColor: '#0F3FF2'
            },
            emphasis: {
              borderWidth: 1,
              areaColor: '#021B87',
              borderColor: '#024DBA'
            }
          },
        },
        series: [
          {
            name: '地区',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [{
              name: '山东',
              value: [118.000923, 36.275807, 29],
            },],
            symbol: "circle",
            symbolSize: 20,
            label: {
              normal: {
                show: false,

              },
              emphasis: {
                show: false
              }
            },

          },
          // 区域散点图
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            symbolSize: 5,
            rippleEffect: { //坐标点动画
              period: 3,
              scale: 5,
              brushType: 'fill'
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                formatter: '{b}',
                color: '#b3e2f2',
                fontWeight: "bold",
                fontSize: 16
              }
            },

            data: [{
              name: "山东",
              value: [118.000923, 36.275807]
            },
            {
              name: "深圳",
              value: [114.271522, 22.753644]
            },
            {
              name: "南京",
              value: [118.78, 32.04]
            },
            {
              name: "重庆",
              value: [106.54, 29.59]
            },
            {
              name: "北京",
              value: [116.24, 39.55, 100]
            },
            {
              name: "荆州",
              value: [113.41, 29.59]
            },
            {
              name: "太原",
              value: [112.549656,37.870451]
            },
            {
              name: "贵州",
              value: [106.713478, 26.578343]
            },{
              name: "新疆",
              value: [87.617733, 43.792818]
            },{
              name: "黑龙江",
              value: [126.642464, 45.756967]
            },{
              name: "西藏",
              value: [91.132212, 29.660361]
            },{
              name: "青海",
              value: [96.778916, 35.623178]
            },{
              name: "西安",
              value: [108.939645,34.343207]
            },{
              name: "兰州",
              value: [103.835676,36.049366]
            },{
              name: "成都",
              value: [104.076452,30.651696]
            },{
              name: "呼和浩特",
              value: [111.690689,40.814448]
            },{
              name: "昆明",
              value: [102.822345,24.878215]
            },{
              name: "南昌",
              value: [115.800466,28.671286]
            }

            ],
            itemStyle: { //坐标点颜色
              normal: {
                show: true,
                color: '#fff',
                shadowBlur: 10,
                shadowColor: '#fff'
              },
              emphasis: {
                areaColor: '#f00'
              }
            },

          },
          // 线 和 点
          {
            type: 'lines',
            zlevel: 1, 
            effect: {
              show: true,
              period: 7,
              trailLength: 0.2,
              color: '#fff',
              symbol: 'circle',
              symbolSize: 6
            },
            lineStyle: {
              normal: {
                color: '#A7EBFF',
                width: 1,
                curveness: 0.2,
                shadowColor: '#fff',
              }
            },
            data: [{
              fromName: 1,
              toName: 1,
              coords: [
                [118.000923, 36.275807],
                [115.800466,28.671286],
              ]
            },{
              fromName: 1,
              toName: 1,
              coords: [
                [118.000923, 36.275807],
                [102.822345,24.878215],
              ]
            },{
              fromName: 1,
              toName: 1,
              coords: [
                [118.000923, 36.275807],
                [111.690689,40.814448],
              ]
            },{
              fromName: 1,
              toName: 1,
              coords: [
                [118.000923, 36.275807],
                [104.076452,30.651696],
              ]
            },{
              fromName: 1,
              toName: 1,
              coords: [
                [118.000923, 36.275807],
                [103.835676,36.049366],
              ]
            },{
              fromName: 1,
              toName: 1,
              coords: [
                [118.000923, 36.275807],
                [108.939645,34.343207],
              ]
            },{
              fromName: 1,
              toName: 1,
              coords: [
                [118.000923, 36.275807],
                [96.778916, 35.623178],
              ]
            },{
              fromName: 1,
              toName: 1,
              coords: [
                [118.000923, 36.275807],
                [91.132212, 29.660361],
              ]
            },{
              fromName: 1,
              toName: 1,
              coords: [
                [118.000923, 36.275807],
                [126.642464, 45.756967],
              ]
            },{
              fromName: 1,
              toName: 1,
              coords: [
                [118.000923, 36.275807],
                [87.617733, 43.792818],
              ]
            },{
              fromName: 1,
              toName: 1,
              coords: [
                [118.000923, 36.275807],
                [106.713478, 26.578343],
              ]
            },{
              fromName: 1,
              toName: 1,
              coords: [
                [118.000923, 36.275807],
                [112.549656,37.870451],
              ]
            }, {
              fromName: 1,
              toName: 1,
              coords: [
                [118.000923, 36.275807],
                [114.271522, 22.753644],
              ]
            }, {
              fromName: 1,
              toName: 1,
              coords: [
                [118.000923, 36.275807],
                [116.24, 39.55],
              ]
            },
            {
              fromName: 1,
              toName: 1,
              coords: [
                [118.000923, 36.275807],
                [118.78, 32.04],
              ]
            },
            {
              fromName: 1,
              toName: 1,
              coords: [
                [118.000923, 36.275807],
                [106.54, 29.59],
              ]
            },
            {
              fromName: 1,
              toName: 1,
              coords: [
                [118.000923, 36.275807],
                [113.41, 29.59],
              ]
            }
            ],

          }
        ]
      }
      this.chartInstance.setOption(option);
    }
  },
}
</script>

<style>

.com-map {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.com-map div {
  z-index: 99999;
  opacity: 0.8;
}
</style>