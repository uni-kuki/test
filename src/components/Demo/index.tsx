/**
 * @Description 示例
 * @Date 2023/4/14 周五 18:39
 * @Author Tang-J-L <vx：17685112557>
 */
import { defineComponent, getCurrentInstance, onMounted } from 'vue'
import './index.pcss'
import { useAsyncState } from '@vueuse/core'

// 泛型接口，限制props
interface IProps {
	name?: string
}

const Demo = defineComponent({
	props: ['name'],
	setup(props: IProps, ctx) {
		// 接收参数
		console.log('props:', props.name)
		console.log('ctx:', ctx)

		const { proxy } = getCurrentInstance() as any
		const request = proxy.$api
		// 网络请求两种方式
		const getData = () => {
			console.log('getDate...')
			return request.carouselService.list()
		}

		// 法一：hook（推荐）
		const { state, isReady, isLoading, execute } = useAsyncState(getData, {})
		console.log('state:', state, 'isReady:', isReady, 'isLoading:', isLoading, 'execute:', execute)

		// 法二：声明周期钩子
		onMounted(async () => {
			console.log('mounted...')
			await request.carouselService.list()
		})

		return () => {
			return (
				<>
					<div class="header">
						<div class="h1">头部1</div>
						<div class="h2">头部2</div>
					</div>
				</>
			)
		}
	}
})

export default (props: IProps) => <Demo {...props} />
