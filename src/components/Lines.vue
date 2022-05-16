<template>
    <div class="line">
        <div class="com-line" ref="line_ref">
        </div>
        <div class="line-footer"></div>
    </div>
</template>

<script>
export default {
    name: "xs-line",
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
            this.chartInstance = this.$echarts.init(this.$refs.line_ref);
        },
        async getData() {
            await this.updateChart();
        },
        updateChart() {
            let myColor = ["#1089E7", "#F57474", "#56D0E3", "#f8b448", "#8B78F6"];
            const options = {
                title: {
                    text: '班级就业率',
                    // subtext: '在此测试',
                    x: 'center',
                    y: 'top',
                    textAlign: 'center',
                    textStyle: {
                        color: "#fff",
                    }
                },
                grid: {
                    top: "10%",
                    left: "30%",
                    right: "15%",
                    bottom: "10%"
                    // containLabel: true
                },
                // 不显示x轴的相关信息
                xAxis: {
                    show: false
                },
                yAxis: [
                    {
                        type: "category",
                        inverse: true,
                        data: ["19应用01", "19应用02", "19应用03", "19应用04", "总体"],
                        // 不显示y轴的线
                        axisLine: {
                            show: false
                        },
                        // 不显示刻度
                        axisTick: {
                            show: false
                        },
                        // 把刻度标签里面的文字颜色设置为白色
                        axisLabel: {
                            color: "#fff"
                        }
                    },
                    {
                        data: [48 + "人", 49 + "人", 46 + "人", 47 + "人", 190 + "人"],
                        inverse: true,
                        // 不显示y轴的线
                        axisLine: {
                            show: false
                        },
                        // 不显示刻度
                        axisTick: {
                            show: false
                        },
                        // 把刻度标签里面的文字颜色设置为白色
                        axisLabel: {
                            color: "#fff"
                        }
                    }
                ],
                series: [
                    {
                        name: "条",
                        type: "bar",
                        data: [76.44, 76.19, 80.95, 85.71, 79.55],
                        yAxisIndex: 0,
                        // 修改第一组柱子的圆角
                        itemStyle: {
                            barBorderRadius: 20,
                            // 此时的color 可以修改柱子的颜色
                            color: function (params) {
                                // params 传进来的是柱子对象
                                // console.log(params);
                                // dataIndex 是当前柱子的索引号
                                return myColor[params.dataIndex];
                            }
                        },
                        // 柱子之间的距离
                        barCategoryGap: 50,
                        //柱子的宽度
                        barWidth: 10,
                        // 显示柱子内的文字
                        label: {
                            show: true,
                            position: "inside",
                            // {c} 会自动的解析为 数据  data里面的数据
                            formatter: "{c}%"
                        }
                    },
                    {
                        name: "框",
                        type: "bar",
                        barCategoryGap: 50,
                        barWidth: 15,
                        yAxisIndex: 1,
                        data: [100, 100, 100, 100, 100],
                        itemStyle: {
                            color: "none",
                            borderColor: "#00c1de",
                            borderWidth: 3,
                            barBorderRadius: 15
                        }
                    }
                ]
            };

            this.chartInstance.setOption(options);

        },

    },
}
</script>

<style>
.line {
    width: 100%;
    height: 300px;
    overflow: hidden;
    position: relative;
    padding: 5px;
    margin: 10px;
    text-align: center;
}

.com-line {
    padding: 10px;
    background: url(../static/images/line.png) rgba(255, 255, 255, 0.03);
    background-size: cover;
    border: 1px solid rgba(25, 186, 139, 0.17);
    width: 95%;
    height: 300px;
    overflow: hidden;
}

.line::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-left: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
    content: "";
}

.line::after {
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-right: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
    content: "";
}

.line-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}

.line-footer::before {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-right: 2px solid #02a6b5;
    border-bottom: 2px solid #02a6b5;
    content: "";
}

.line-footer::after {
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