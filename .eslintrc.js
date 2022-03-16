module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'settings': {
		'react': {
			'version': 'detect',
		}
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'react/react-in-jsx-scope': 'off',
		// 'react/prop-types': 'off',
		// '@typescript-eslint/explicit-function-return-type': 'off',
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
}
