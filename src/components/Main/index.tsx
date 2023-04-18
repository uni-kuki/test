import { defineComponent } from 'vue'

/**
 * @Description 主页面
 * @Date 2023/4/16 周日 15:28
 * @Author Tang-J-L <vx：17685112557>
 */
const Main = defineComponent({
	setup() {
		return () => {
			return <div>main</div>
		}
	}
})

export default () => <Main />
