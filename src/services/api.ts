/**
 * @Description 统一管理接口服务
 * @Date 2023/4/10 周一 8:34
 * @Author Tang-J-L <vx：17685112557>
 */
import userService from './user/userService'
import carouselService from './carousel/carouselService'
import categoryService from '@/services/category/categoryService'
import productService from '@/services/product/productService'
import orderService from '@/services/order/orderService'
import collectService from '@/services/collect/collectService'
import cartService from '@/services/cart/cartService'

export default {
	userService,
	carouselService,
	categoryService,
	productService,
	orderService,
	collectService,
	cartService
}
