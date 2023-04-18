import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { toPairs } from 'lodash'

interface IRouter {
	path: string
	name: string
	component: () => Promise<any>
	meta: string
}

const pageModules = import.meta.glob('../views/**/page.ts', {
	eager: true, // 忽略动态都如函数
	import: 'default' // 提取default出来
})

const comModules = import.meta.glob('../views/**/index.tsx')

// 自动生成路由
const autoRoutes: RouteRecordRaw[] = toPairs(pageModules).map(([pagePath, config]: any): IRouter => {
	const path = pagePath.replace('../views', '').replace('page.ts', '') || '/home'
	const name = path.split('/').filter(Boolean).join('-') || 'index'
	const comPath = pagePath.replace('page.ts', 'index.tsx')

	return {
		path,
		name,
		component: comModules[comPath],
		meta: config
	}
})

const customRoutes: RouteRecordRaw[] = [
	// 添加自定义路由...
	{
		path: '/home',
		redirect: '/'
	},
	{
		path: '/',
		component: () => import('@/views/home')
	}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [...customRoutes, ...autoRoutes],
	scrollBehavior() {
		// 当切换到新路由时，始终滚动到顶部
		return { top: 0 }
	}
})

// 拦截配置。。。

export default router
