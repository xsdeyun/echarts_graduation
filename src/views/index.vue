<template>
  <div class="contanier">
  <audio style="display: none;" src="http://img.youfanzi.cn/tu1/toimg/UTxE0eQpHCobj_wo3DlMOGwrbDjj7DisKw_8704427948_2427_9ca7_253d_c6b0b7be447e12be1e257db442351c98.mp3" autoplay controls loop></audio>
    <!-- 头部 -->
    <div class="header">
      <h2>毕业人员大屏信息数据展示</h2>
      <p>当前时间：{{ time }}</p>
    </div>
    <div class="content">
      <!-- 左 -->
      <div class="large-left">
        <xs-grad></xs-grad>
        <xs-pie></xs-pie>

      </div>
      <!-- 中间 -->
      <div class="large-center">
        <div class="large-center-num">
          <div class="c-number-cent">
          <p class="c-number">190</p>
          <p class="c-text">毕业总人数</p>
          </div>
          <div class="c-number-cent">
          <p class="c-number">182</p>
          <p class="c-text">就业总人数</p>
          </div>
        </div>
        <xs-map></xs-map>
        <div class="earth"></div>
        <div class="ling"></div>
        <div class="circle"></div>
      </div>
      <!-- 右 -->
      <div class="large-right">
      <xs-line></xs-line>
        <xs-dotted></xs-dotted>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      time: null,

    };
  },
  mounted() {
    this.gettime();
  },
  methods: {
    gettime() {
      setInterval(() => {
        this.time = this.$time.Timeday();
      }, 1000);
    },
  },
};
</script>
<style>
.contanier {
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background: url(../static/images/bg.jpg) no-repeat top center;
}

/* 头部 header */
.header {
  height: 80px;
  line-height: 80px;
  background: url(../static/images/head_bg.png) no-repeat;
  background-size: 100% 100%;
  color: #fff;
  position: relative;
}

.header h2 {
  flex: 1;
  font-size: 30px;
}

.header p {
  position: absolute;
  right: 30px;
  top: -10px;
}

/* 主体 content */
.content {
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.large-left {
  width: 25%;
  height: calc(100% - 80px);
}

.large-center {
  width: 50%;
  height: calc(100% - 80px);
  position: relative;
}
.large-center-num{
  box-sizing: border-box;
  width: 90%;
  position: absolute;
  top: 0px;
  left: 50px;
  height: 130px;
  background: rgba(101, 132, 226, 0.1);
  display: flex;
  justify-content: center;
  padding: 20px 10px;
}
.c-number-cent{
  width: 50%;
  border: 1px solid rgba(25, 186, 139, 0.17);
  position: relative;
}
.c-number{
  font-size:35px;
  color: #ffeb7b;
    text-align: center;
    font-family: "electronicFont";
    margin-top: 15px;
    margin-bottom: 10px;
}
.c-text{
  color: rgba(255, 255, 255, 0.7);
}
.c-number-cent:nth-child(1)::before{
 position: absolute;
  top: 0;
  left: 0;
  width: 15px;
  height: 10px;
  border-left: 2px solid #02a6b5;
  border-top: 2px solid #02a6b5;
  content: "";
}
.c-number-cent:nth-child(2)::after{
  position: absolute;
  bottom: 0;
  right: 0;
  width: 15px;
  height: 10px;
  border-right: 2px solid #02a6b5;
  border-bottom: 2px solid #02a6b5;
  content: "";
}
.large-center>.earth {
  position: absolute;
  width: 500px;
  height: 500px;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(../static/images/map.png);
  background-size: 100% 100%;
  opacity: 0.3;
}

.large-center>.ling {
  position: absolute;
  width: 500px;
  height: 500px;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(../static/images/jt.png);
  animation: roling 10s linear infinite;
  opacity: 0.6;
  background-size: 100% 100%;
}

.large-center>.circle {
  position: absolute;
  width: 500px;
  height: 500px;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(../static/images/lbx.png);
  animation: rocircle 15s linear infinite;
  opacity: 1;
  background-size: 100% 100%;
}

@keyframes rocircle {
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes roling {
  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

.large-right {
  margin-right: 50px;
  width: 25%;
  height: calc(100% - 80px);
}
</style>