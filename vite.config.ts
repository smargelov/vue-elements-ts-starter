import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
	resolve: {
		alias: [{ find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }],
	},
	plugins: [
		vue(),
		AutoImport({
			imports: ['vue', '@vueuse/core'],
			resolvers: [ElementPlusResolver()],
			dirs: [],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/assets/styles/index.scss";`,
			},
		},
	},
})
