module.exports = {
	prefix: 'sgt-',
	corePlugins: {
		preflight: false,   
	},
	purge: [
		'./src/**/*.html',
		'./src/templates/*.js',
		'./src/components/*.js',
		'./src/pages/*.js',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Verdana', 'sans-serif'],
			},
			colors: {
				'sglight': '#CfDEF5',
				'sgdark': '#666f7c',
			}
		}
	}
};
