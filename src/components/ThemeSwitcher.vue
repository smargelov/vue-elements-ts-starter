<template>
<el-switch
	v-model="isDark"
	class="theme-switcher"
	:active-action-icon="Moon"
	:inactive-action-icon="Sunny"
/>
</template>

<script setup lang="ts">
const isDark = useDark()
import { Moon, Sunny } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.theme-switcher {
	--el-switch-off-color: #837e7e;
	--el-switch-on-color: #837e7e;
}
</style>
