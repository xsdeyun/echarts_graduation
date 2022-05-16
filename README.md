**
# vue+echarts数据可视化大屏毕业人员分析统计大屏数据可视化
### 1、效果图

** 
![效果图](https://img-blog.csdnimg.cn/78f4346b665244399aca93d639bd56c1.png#pic_center)


## 2、搭建教程

 - 最直接的方法是在 ECharts 的官方网站中挑选适合您的版本进行下载，不同的打包下载应用于不同的开发者功能与体积的需求，或者您也可以直接下载完整版本；开发环境建议下载源代码版本，包含了常见的错误提示和警告。
 - 也可以在 ECharts 的 GitHub 上下载最新的 release 版本，解压出来的文件夹里的 dist 目录里可以找到最新版本的 echarts 库。
 - 或者通过 npm 获取 echarts，npm install echarts --save，详见“在 webpack 中使用 echarts”
由 cdn 引入，你可以在 cdnjs，npmcdn 或者国内的 bootcdn 上找到 ECharts 的最新版本。


## 3、vue中引入echarts：

 1. 先安装依赖
 

```javascript
npm install echarts --save
```

 2. 全局引入main.js中配置（不推荐使用，会导致包过大，冗余多）

```javascript
import echarts from 'echarts' //引入echarts
Vue.prototype.$echarts = echarts //挂载在原型，组件内使用直接this.$echarts调用
```

## 4、运行与打包

```javascript

 1. npm run serve  启动项目
 2. npm run build  打包项目
 
```
## 4、说明
项目用的是静态数据，不是动态数据，接口配置也已经封装和配置好，只需要替换vue.config.js里面的接口地址。其他的可以根据自己的需求进行更改。



#### 项目地址下载地址：
[CSDN下载地址](https://download.csdn.net/download/qq_45830796/85391939)
[Gitee地址](https://gitee.com/song-xiansen/echarts_graduation)