import './index.pcss'
import { defineComponent } from 'vue'
import { ShoppingCart } from '@element-plus/icons-vue'

/**
 * @Description
 * @Date 2023/4/16 周日 15:23
 * @Author Tang-J-L <vx：17685112557>
 */
const Header = defineComponent({
	setup() {
		return () => {
			return (
				<div class="header">
					{/*<Demo name={'demo'} />*/}
					<div class="header-content">
						<ul>
							<li>登录</li>
							<li>注册</li>
							<li>消息通知</li>
							<li class="header-content-cart">
								<el-icon size="20px">
									<ShoppingCart />
								</el-icon>
								<span> &nbsp;购物车(0)</span>
							</li>
						</ul>
					</div>
				</div>
			)
		}
	}
})

export default () => <Header />
