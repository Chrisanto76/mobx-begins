module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['mobx'],
	extends: ['plugins:mobx/recommended', 'react-app', 'react-app/jest'],
	rules: {
		'mobx/missing-observer': 'off',
	},
};
