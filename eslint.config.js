import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
	eslint.configs.recommended,
	eslintConfigPrettier,
	...tseslint.configs.recommended,
	...pluginVue.configs['flat/recommended'],
	{
		rules: {
			'vue/no-unused-vars': 'error',
			'vue/html-indent': ['error', 'tab'],
			'vue/multi-word-component-names': 'off',
			'vue/component-api-style': ['error', ['script-setup', 'composition']],
			'vue/max-attributes-per-line': [
				'error',
				{
					singleline: {
						max: 3,
					},
				},
			],
			'vue/component-name-in-template-casing': [
				'error',
				'kebab-case',
				{
					registeredComponentsOnly: false,
					ignores: [],
				},
			],
			'vue/attributes-order': [
				'error',
				{
					order: [
						'DEFINITION',
						'LIST_RENDERING',
						'CONDITIONALS',
						'RENDER_MODIFIERS',
						'GLOBAL',
						['UNIQUE', 'SLOT'],
						'TWO_WAY_BINDING',
						'OTHER_DIRECTIVES',
						'ATTR_DYNAMIC',
						'ATTR_STATIC',
						'ATTR_SHORTHAND_BOOL',
						'EVENTS',
						'CONTENT',
					],
					alphabetical: false,
				},
			],
			'no-undef': 'off',
		},
	},
]
