import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

/**
 * @Description 全局共享数据 Pinia
 * @Date 2023/4/11 周二 1:28
 * @Author Tang-J-L <vx：17685112557>
 */
export const useCounterStore = defineStore('counter', () => {
	const count = ref(0)
	const doubleCount = computed(() => count.value * 2)

	function increment() {
		count.value++
	}

	return { count, doubleCount, increment }
})
