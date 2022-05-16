import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 通用页面, 这里的配置不需要权限
export const constRouter = [
    {  
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue')
  }
]


const router = new VueRouter({
	mode: 'history',
	// base: "/views/",
	routes: constRouter
})


export default router;
