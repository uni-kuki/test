import type { NoData } from '@/services/noData'
import type { UserVo } from '@/services/user/userVo'
import type { UserDto } from '@/services/user/userDto'
import { POST } from '@/utils/request'

/**
 * @Description 用户服务
 * @Date 2023/4/11 周二 1:24
 * @Author Tang-J-L
 */
export interface IUser {
	check: (p: string) => Promise<NoData>
	register: (p: UserDto) => Promise<NoData>
	login: (p: UserDto) => Promise<UserVo>
}

const userService: IUser = {
	/**
	 * 账号检查
	 * @param userName 用户名
	 */
	check: async (userName): Promise<NoData> => {
		const { data } = await POST('/user/check', userName)
		return data
	},
	/**
	 * 账号注册
	 * @param p 用户名、密码
	 */
	register: async (p): Promise<NoData> => {
		const { data } = await POST('/user/register', p)
		return data
	},
	/**
	 * 用户登录
	 * @param p 用户名、密码
	 */
	login: async (p): Promise<UserVo> => {
		const { data } = await POST('/user/login', p)
		return data
	}
}
export default userService
