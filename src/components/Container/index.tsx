import './index.pcss'
import type { Ref } from 'vue'
import { defineComponent, getCurrentInstance, onMounted, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import type { CategoryVo } from '@/services/category/categoryVo'
import _ from 'lodash'

/**
 * @Description 轮播图部分
 * @Date 2023/4/16 周日 15:29
 * @Author Tang-J-L <vx：17685112557>
 */
const Container = defineComponent({
	setup() {
		const { proxy } = getCurrentInstance() as any
		const request = proxy.$api

		const cateGoryList: Ref<CategoryVo[]> = ref([])
		const setCategoryList = async () => {
			cateGoryList.value = await request.categoryService.list()
		}

		onMounted(async () => {
			await setCategoryList()
		})

		return () => {
			return (
				<>
					<div class="container">
						<div class="container-logo">
							<img src="/shop.svg" alt="无法加载" />
						</div>
						<div class="container-category">
							<ul>
								{/*{cateGoryList.value.map((i) => {*/}
								{/*	return (*/}
								{/*		<li*/}
								{/*			key={i.categoryId}*/}
								{/*			onMouseenter={() => {*/}
								{/*				infoVisible.value = true*/}
								{/*			}}*/}
								{/*			onMouseleave={() => {*/}
								{/*				infoVisible.value = false*/}
								{/*			}}*/}
								{/*		>*/}
								{/*			{i.categoryName}*/}
								{/*		</li>*/}
								{/*	)*/}
								{/*})}*/}
								{_.map(cateGoryList.value, (i: any) => {
									return <li key={i.categoryId}>{i.categoryName}</li>
								})}
							</ul>
						</div>
						<div class="search">
							<el-input size="large" suffix-icon={Search} placeholder="手机" />
						</div>
					</div>
				</>
			)
		}
	}
})

export default () => <Container />
