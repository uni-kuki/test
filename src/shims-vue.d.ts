/**
 * @Description 给ts添加api类型
 * @Date 2023/4/15 周六 12:37
 * @Author Tang-J-L <vx：17685112557>
 */

export {}

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$api: any
	}
}
