/**
 * @Description 类别服务
 * @Date 2023/4/16 周日 23:29
 * @Author Tang-J-L <vx：17685112557>
 */
import type { CategoryVo } from '@/services/category/categoryVo'
import { GET } from '@/utils/request'

export interface ICategory {
	list: () => Promise<CategoryVo>
}

const categoryService: ICategory = {
	list: async (): Promise<CategoryVo> => {
		const { data } = await GET('/category/list')
		return data
	}
}

export default categoryService
