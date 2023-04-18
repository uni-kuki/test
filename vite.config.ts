/**
 * @Description 环境变量
 * @Date 2023/4/11 周二 15:03
 * @Author Tang-J-L
 */

import { defineConfig, loadEnv } from 'vite'
import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'

// 策略模式
const envMode = {
  'build': () => ( { ...viteBaseConfig, ...viteProdConfig }),
  'serve': () => ( { ...viteBaseConfig, ...viteDevConfig })
}
export default defineConfig( ({command,mode}) => {

  loadEnv(mode,process.cwd(),'')

  // 根据启动环境选择相应的环境变量配置
  return envMode[command]()

})
