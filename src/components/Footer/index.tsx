import { defineComponent } from 'vue'

/**
 * @Description
 * @Date 2023/4/16 周日 15:27
 * @Author Tang-J-L <vx：17685112557>
 */
const Footer = defineComponent({
	setup() {
		return () => {
			return <div>尾部</div>
		}
	}
})

export default () => <Footer />
