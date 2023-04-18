/**
 * @Description 全局统一分页参数类型声明
 * @Date 2023/4/10 周一 10:17
 * @Author Tang-J-L
 */

interface Model {
	type?: string
}

declare interface PageParam {
	total: number
	currentSize: number
	pageNum: number
	pageSize: number
	type?: Model
	readonly sort?: string // 只读可选参数
}

export default PageParam
