/**
 * @Description Axios封装
 * @Date 2023/4/10 周一 22:40
 * @Author Tang-J-L
 */

import axios from 'axios'
import qs from 'qs'

export interface ApiResult<T> {
	code: number | string
	message: string
	data: T
}

const instance = axios.create({
	baseURL: import.meta.env.ENV_APP_BASE_URL,
	/**
	 * 超时时间
	 */
	timeout: 3000,
	/**
	 * 允许跨域携带身份凭证
	 */
	// withCredentials: true,
	// 序列化参数
	transformRequest: (data) => {
		// 将入参对象序列化成 Form Data，仅 'PUT', 'POST' 和 'PATCH' 这几个请求方法有效
		qs.stringify(data)
	},
	headers: {
		APP_KEY: import.meta.env.ENV_APP_KEY // 开发环境
	}
})

// instance.defaults.baseURL = import.meta.env.VITE_ENV_BASE_URL;
instance.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

/**
 * 请求拦截器
 */
instance.interceptors.request.use(
	(config) => {
		// 发送请求前些什么

		//获取本地存储中的token
		const token = localStorage.getItem('token')
		token && (config.headers.Authorization = token)
		return config
	},
	(error) => {
		//请求失败做些什么
		return Promise.reject(error)
	}
)

/**
 * 响应拦截器
 */
instance.interceptors.response.use(
	(response) => {
		// 2xx 范围内的状态码都会触发该函数
		// 对响应数据做些什么
		return response.data
	},
	(error) => {
		// 超出 2xx 范围内的状态码都会触发该函数
		// 对响应错误做些什么
		const { response } = error
		if (error.response) {
			switch (response.status) {
				case 401: //权限问题,提示未登录或无权限等；
					break
				case 403: //服务器拒绝执行 （token过期）
					break
				case 404: //找不到页面
					break
				default:
					break
			}
		} else {
			//服务器连结果都没有返回
			if (!window.navigator.onLine) {
				//断网处理：跳转断网页面/提示网络错误等等
				return
			}
			return Promise.reject(error)
		}
	}
)

/**
 * 封装request
 * @param url
 * @param method
 * @param param
 * @private
 */
export const request = (url: string, method: string, param: object): Promise<ApiResult<any>> => {
	return instance({
		url,
		method,
		params: method === 'GET' || 'get' ? param : '',
		data: method === 'POST' || 'post' ? qs.stringify(param) : ''
	})
}

/**
 * 封装GET
 * @param url
 * @param param
 * @constructor
 */
export const GET = (url: string, param?: any): Promise<ApiResult<any>> => {
	return request(url, 'GET', param)
}
/**
 * 封装POST
 * @param url
 * @param param
 * @constructor
 */
export const POST = (url: string, param?: any): Promise<ApiResult<any>> => {
	return request(url, 'POST', param)
}
export default instance
