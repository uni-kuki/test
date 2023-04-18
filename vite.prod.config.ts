/**
 * @Description 生产环境变量配置
 * @Date 2023/4/11 周二 15:03
 * @Author Tang-J-L
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
	plugins: [vue(), vueJsx()],
	// 打包配置
	build: {
		target: 'modules',
		outDir: 'dist', //指定输出路径
		assetsDir: 'assets', // 指定生成静态资源的存放路径
		minify: 'terser', // 混淆器，terser构建后文件体积更小
		commonjsOptions: {
			esmExternals: true
		}
	}
})
