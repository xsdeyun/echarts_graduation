<template>
  <div class="seller">
    <div class="com-seller" ref="seller_ref">
    </div>
    <div class="seller-footer"></div>
  </div>
</template>

<script>
export default {
  name: "xs-grad",
  data() {
    return {
      chartInstance: null,
    };
  },
  mounted() {
    this.initChart();
    this.getData();
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.seller_ref);
    },
    async getData() {
      await this.updateChart();
    },
    updateChart() {
      const options = {
        color: ['#2C53F8'],
        title: {
          text: '毕业去向',
          // subtext: '在此测试',
          x: 'center',
          y: 'top',
          textAlign: 'center',
          textStyle: {
            color: "#fff",
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        // 修改图表的大小
        grid: {
          left: "0%",
          top: "15%",
          right: "2%",
          bottom: "4%",
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['IT行业', '设计行业', '金融行业', '政府机关', '灵活就业', '自主创业', '专升本'],
          axisTick: {
            alignWithLabel: true
          },
          // 修改刻度标签 相关样式
          axisLabel: {
            color: "rgba(255,255,255,.6) ",
            fontSize: "8"
          },
          // 不显示x坐标轴的样式
          axisLine: {
            show: false
          }
        },
        yAxis: [
          {
            type: "value",
            // 修改刻度标签 相关样式
            axisLabel: {
              color: "rgba(255,255,255,.6) ",
              fontSize: 10
            },
            // y轴的线条改为了 2像素
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 2
              }
            },
            // y轴分割线的颜色
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
          }
        ],
        series: [
          {
            data: [40, 20, 10, 30, 60, 20, 40],
            type: 'bar',
            itemStyle: {
              // 修改柱子圆角
              barBorderRadius: 5
            }
          }
        ]
      };

      this.chartInstance.setOption(options);

      this.pieActive()
      // 鼠标划出
      this.chartInstance.on('mouseout', () => {
        this.pieActive()
      })
    },

    // 实现循环高亮
    pieActive() {
      let index = 0;
      let dataLength = 5;
      let showTime = setInterval(() => {
        if (index > dataLength + 1) {
          index = 0
        }
        this.chartInstance.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: index
        })
        index++
      }, 1500)
      // 鼠标划入
      this.chartInstance.on('mouseover', () => {
        // 停止定时器，清除之前的高亮
        clearInterval(showTime)
        this.chartInstance.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: index
        })
      })
    }
  },
}
</script>

<style>
.seller {
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  padding: 5px;
  margin: 10px;
}

.com-seller {
  padding: 10px;
  background: url(../static/images/line.png) rgba(255, 255, 255, 0.03);
  background-size: cover;
  border: 1px solid rgba(25, 186, 139, 0.17);
  width: 95%;
  height: 300px;
  overflow: hidden;
}

.seller::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-left: 2px solid #02a6b5;
  border-top: 2px solid #02a6b5;
  content: "";
}

.seller::after {
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-right: 2px solid #02a6b5;
  border-top: 2px solid #02a6b5;
  content: "";
}

.seller-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.seller-footer::before {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-right: 2px solid #02a6b5;
  border-bottom: 2px solid #02a6b5;
  content: "";
}

.seller-footer::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-left: 2px solid #02a6b5;
  border-bottom: 2px solid #02a6b5;
  content: "";
}
</style>