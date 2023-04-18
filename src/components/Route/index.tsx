import { defineComponent } from 'vue'

/**
 * @Description
 * @Date 2023/4/17 周一 0:56
 * @Author Tang-J-L <vx：17685112557>
 */
const Route = defineComponent({
	setup() {
		return () => {
			return (
				<>
					<router-view />
				</>
			)
		}
	}
})

export default () => <Route />
