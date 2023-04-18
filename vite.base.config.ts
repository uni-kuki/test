import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
			// '@': path.resolve(__dirname, './src')
		},
		extensions: ['.js', '.tsx', '.ts', '.d.ts'] // 使用路径别名时想要省略的后缀
	},
	envPrefix: 'ENV_' // 修改环境变量前缀
})
