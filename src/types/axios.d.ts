/**
 * @Description 补充Axios类型文件
 * @Date 2023/4/10 周一 11:34
 * @Author Tang-J-L
 */

import { ApiResult } from '@/utils/request'

declare module 'axios' {
	interface AxiosInstance {
		POST<T = any>(url: string, param?: object): Promise<ApiResult<T>>

		GET<T = any>(url: string, param?: object): Promise<ApiResult<T>>
	}
}
