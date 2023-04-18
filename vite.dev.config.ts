/**
 * @Description 开发环境变量配置
 * @Date 2023/4/11 周二 15:03
 * @Author Tang-J-L
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import checker from 'vite-plugin-checker'
import vueJsx from '@vitejs/plugin-vue-jsx'
import postcssNested from 'postcss-nested'

export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		// 如果不希望在使用 Vitest 进行单元测试期间运行检查器，则可以基于此更改配置
		!process.env.VITEST ? checker({ typescript: true }) : undefined,
		checker({
			eslint: {
				lintCommand: 'eslint "./src/**/*.{ts,tsx}"'
			},
			// 开启 TypeScript 编译器
			vueTsc: true
		})
	],
	server: {
		cors: true,
		open: true,
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				// target: import.meta.env.ENV_APP_PROXY_TARGET,
				changeOrigin: true,
				ws: true, // 允许websocket代理
				// rewrite: ( path ) => path.replace(new RegExp('^/api'), '')
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	},
	css: {
		postcss: {
			plugins: [postcssNested()]
		}
	}
})
