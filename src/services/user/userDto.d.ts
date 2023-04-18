/**
 * @Description 用户服务响应体
 * @Date 2023/4/11 周二 1:28
 * @Author Tang-J-L <vx：17685112557>
 */

export interface UserDto {
	id?: string
	userId: number
	userName?: string
	password?: string
	userPhoneNumber?: string
	address?: string
	linkman?: string
}
