<template>
	<el-switch
		v-model="isDark"
		:active-action-icon="Moon"
		:inactive-action-icon="Sunny"
		class="theme-switcher"
	/>
</template>

<script setup lang="ts">
import { Moon, Sunny } from '@element-plus/icons-vue'

const isDark = useDark()
</script>

<style lang="scss" scoped>
.theme-switcher {
	--el-switch-off-color: #837e7e;
	--el-switch-on-color: #837e7e;
}
</style>
