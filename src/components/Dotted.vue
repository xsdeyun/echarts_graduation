<template>
    <div class="dotted">
        <div class="com-dotted" ref="dotted_ref">
        </div>
        <div class="dotted-footer"></div>
    </div>
</template>

<script>
export default {
    name: "xs-dotted",
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
            this.chartInstance = this.$echarts.init(this.$refs.dotted_ref);
        },
        async getData() {
            await this.updateChart();
        },
        updateChart() {
            const options = {
                title: {
                    text: '平均收入',
                    textStyle: {
                        color: "#fff", // 主标题文字的颜色。
                    },
                },
                grid: {
                    left: "3%",
                    top: "12%",
                    right: "0%",
                    bottom: "10%",
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['line', 'bar'],
                    textStyle: {
                        color: '#ccc'
                    }
                },
                xAxis: {
                    data: ["1月", "2月", "3月", "4月", "5月", "6月"],
                    axisLine: {
                        lineStyle: {
                            color: '#ccc'
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    splitLine: { show: false },
                    axisLine: {
                        lineStyle: {
                            color: '#ccc'
                        }
                    }
                },
                series: [
                    {
                        name: 'line',
                        type: 'line',
                        smooth: true,
                        showAllSymbol: true,
                        symbol: 'emptyCircle',
                        symbolSize: 15,
                        data: [2100, 2500, 3600, 3900, 3500, 4900]
                    },
                    {
                        name: 'bar',
                        type: 'bar',
                        barWidth: 10,
                        itemStyle: {
                            borderRadius: 5,
                            color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#14c8d4' },
                                { offset: 1, color: '#43eec6' }
                            ])
                        },
                        data: [1800, 2200, 3100, 3500, 2800, 4500]
                    }, {
                        name: 'line',
                        type: 'bar',
                        barGap: '-100%',
                        barWidth: 10,
                        itemStyle: {
                            color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: 'rgba(20,200,212,0.5)' },
                                { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
                                { offset: 1, color: 'rgba(20,200,212,0)' }
                            ])
                        },
                        z: -12,
                        data: [2100, 2500, 3600, 3900, 3500, 4900]
                    },
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
                // 取消之前高亮的图形
                if (index > dataLength) {
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
.dotted {
    width: 100%;
    height: 300px;
    overflow: hidden;
    position: relative;
    padding: 5px;
    margin: 10px;
}

.com-dotted {
    padding: 10px;
    background: url(../static/images/line.png) rgba(255, 255, 255, 0.03);
    background-size: cover;
    border: 1px solid rgba(25, 186, 139, 0.17);
    width: 95%;
    height: 300px;
    overflow: hidden;
}

.dotted::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-left: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
    content: "";
}

.dotted::after {
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-right: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
    content: "";
}

.dotted-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}

.dotted-footer::before {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-right: 2px solid #02a6b5;
    border-bottom: 2px solid #02a6b5;
    content: "";
}

.dotted-footer::after {
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