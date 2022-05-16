<template>
    <div class="pie">
        <div class="com-pie" ref="pie_ref">
        </div>
        <div class="pie-footer"></div>
    </div>
</template>

<script>
export default {
    name: "xs-pie",
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
            this.chartInstance = this.$echarts.init(this.$refs.pie_ref);
        },
        async getData() {
            await this.updateChart();
        },
        updateChart() {
            const options = {
                title: {
                    text: '工作类别',
                    textStyle: {
                        color: "#fff", // 主标题文字的颜色。
                    },
                },
                tooltip: {
                    trigger: 'item',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        restore: { show: true },
                        saveAsImage: { show: true },
                        dataZoom: { show: true },
                    },
                    iconStyle:{
                         color:"#fff",
                         borderColor:"#fff"
                    }
                },
                series: [
                    {
                        name: '工作类别',
                        type: 'pie',
                        radius: "70%",
                        center: ['50%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 5
                        },
                        data: [
                            { value: 40, name: '办事人员' },
                            { value: 38, name: '网络维护人员' },
                            { value: 32, name: '工程人员' },
                            { value: 30, name: '行政人员' },
                            { value: 28, name: '设计人员' },
                            { value: 26, name: 'IT人员' }
                        ]
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
            let dataLength = 6;
            let showTime = setInterval(() => {
                 // 取消之前高亮的图形
                if (index > dataLength + 1) {
                    index = 0
                }
                this.chartInstance.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: index-1
                })
                this.chartInstance.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: index
                })
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
.pie {
    width: 100%;
    height: 300px;
    overflow: hidden;
    position: relative;
    padding: 5px;
    margin: 10px;
}

.com-pie {
    padding: 10px;
    background: url(../static/images/line.png) rgba(255, 255, 255, 0.03);
    background-size: cover;
    border: 1px solid rgba(25, 186, 139, 0.17);
    width: 95%;
    height: 300px;
    overflow: hidden;
}

.pie::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-left: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
    content: "";
}

.pie::after {
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-right: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
    content: "";
}

.pie-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}

.pie-footer::before {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-right: 2px solid #02a6b5;
    border-bottom: 2px solid #02a6b5;
    content: "";
}

.pie-footer::after {
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