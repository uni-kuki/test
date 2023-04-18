import { defineComponent } from 'vue'
import './index.pcss'
import Container from '@/components/Container'
import Main from '@/components/Main'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * @Description 商品
 * @Date 2023/4/16 周日 9:36
 * @Author Tang-J-L <vx：17685112557>
 */
export default defineComponent({
	setup() {
		return () => {
			return (
				<>
					<Header />
					<Container />
					<Main />
					<Footer />
				</>
			)
		}
	}
})
